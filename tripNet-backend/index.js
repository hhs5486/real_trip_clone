// 1. 환경 변수(.env) 파일 불러오기
require("dotenv").config();

// 2. 필요한 라이브러리 가져오기
const express = require("express");
const cors = require("cors");
const cityImageMapping = require("./config/cityImageMapping");
const domesticAccommodationRouter = require("./src/domesticAccommodation/domesticAccommodation");
const { getAccessToken } = require("./src/utils/tokenManager");

const app = express();
const PORT = process.env.PORT || 3001;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 라우터 설정
app.use("/api/domestic-accommodations", domesticAccommodationRouter);

// 기본 라우트
app.get("/", (req, res) => {
  res.json({ message: "서버가 정상적으로 실행 중입니다." });
});

// 404 처리
app.use((req, res) => {
  console.log("404 Not Found:", req.method, req.url);
  res.status(404).json({ error: "Not Found" });
});

// 서버 실행 (AccessToken 먼저 발급받고 시작)
app.listen(PORT, async () => {
  try {
    await getAccessToken();
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중`);
    console.log("✅ 라우터 설정 완료");
    console.log("- /api/domestic-accommodations");
  } catch (error) {
    console.error("❌ 서버 시작 실패:", error.message);
  }
});