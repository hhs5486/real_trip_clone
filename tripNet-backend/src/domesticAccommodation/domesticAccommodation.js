// 1. 환경 변수(.env) 파일 불러오기
require("dotenv").config();

// 2. 필요한 라이브러리 가져오기
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const cityImageMapping = require("../../config/cityImageMapping");
const { getAmadeusToken, getAccessToken } = require("../utils/tokenManager");

const router = express.Router();

// 미들웨어 설정
router.use(cors());
router.use(express.json());

// 라우터 디버그 로깅
router.use((req, res, next) => {
  console.log(`📥 ${req.method} ${req.originalUrl}`);
  next();
});

// 추천 도시 리스트
const recommendedCityCodes = ["PUS","SEL","CJU"];

// 숙소 데이터 API (이달의 추천 숙소)
router.get("/", async (req, res) => {
  console.log("🔍 숙소 API 요청 시작");
  try {
    let token = getAmadeusToken();
    console.log("🔑 현재 토큰:", token ? token.slice(0, 20) + "..." : "No token");

    if (!token) {
      console.log("⚠️ 토큰이 없어 새로 발급받습니다.");
      await getAccessToken();
      token = getAmadeusToken();
      console.log("🔄 새로 발급받은 토큰:", token ? token.slice(0, 20) + "..." : "No token");
    }

    if (!token) {
      throw new Error("토큰을 가져올 수 없습니다.");
    }

    const results = await Promise.all(
      recommendedCityCodes.map(async (cityCode) => {
        console.log(`🏨 ${cityCode} 도시 호텔 검색 중...`);
        // (1) 도시별 호텔 리스트 가져오기
        const response = await axios.get(
          `${process.env.ACCOMMODATION_API_BASE_URL}?cityCode=${cityCode}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const hotels = response.data.data || [];
        const limitedHotels = hotels.slice(0, 3); // 도시당 3개 호텔

        // (2) 각각의 hotelId로 상세 이미지 가져오기
        const hotelDetails = await Promise.all(
          limitedHotels.map(async (hotel) => {
            try {
              const detailResponse = await axios.get(
                `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-hotels?hotelIds=${hotel.hotelId}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              const hotelData = detailResponse.data.data[0];

              // ✅ (3) 이미지 URL 추출 및 검증 (없으면 기본 호텔 이미지 대체)
              const imageUrl = hotelData?.media?.[0]?.uri;

              // 이미지 URL 검증: 실제 이미지 URL인지 확인
              const isValidImageUrl =
                imageUrl &&
                (imageUrl.startsWith("http://") ||
                  imageUrl.startsWith("https://"));

              // 도시 이미지를 매핑에서 가져오기 (랜덤하게 선택)
              const cityImages = cityImageMapping[cityCode] || [];
              const fallbackImage =
                cityImages.length > 0
                  ? cityImages[Math.floor(Math.random() * cityImages.length)]
                  : "https://source.unsplash.com/featured/?hotel,room";

              return {
                hotelId: hotel.hotelId,
                hotelName: hotel.name,
                latitude: hotel.geoCode?.latitude,
                longitude: hotel.geoCode?.longitude,
                imageUrl: isValidImageUrl ? imageUrl : fallbackImage,
              };
            } catch (error) {
              console.error(
                `❌ 호텔 상세정보 가져오기 실패 (hotelId: ${hotel.hotelId}):`,
                error.message
              );

              const cityImages = cityImageMapping[cityCode] || [];
              const errorFallbackImage =
                cityImages.length > 0
                  ? cityImages[Math.floor(Math.random() * cityImages.length)]
                  : "https://source.unsplash.com/featured/?hotel,room";

              return {
                hotelId: hotel.hotelId,
                hotelName: hotel.name,
                latitude: hotel.geoCode?.latitude,
                longitude: hotel.geoCode?.longitude,
                imageUrl: errorFallbackImage,
              };
            }
          })
        );

        return {
          cityCode: cityCode,
          hotels: hotelDetails,
        };
      })
    );

    console.log("✅ 숙소 API 응답 완료");
    res.json(results);
  } catch (error) {
    console.error("❌ 숙소 API 호출 실패:", error.message);
    res.status(500).json({ error: "API 호출 실패" });
  }
});

module.exports = router;
