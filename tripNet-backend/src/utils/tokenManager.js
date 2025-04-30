const axios = require("axios");

// Amadeus Access Token 관리
const tokenManager = {
  token: null,
  
  setToken(newToken) {
    this.token = newToken;
    console.log("✅ 토큰이 업데이트되었습니다:", newToken ? newToken.slice(0, 20) + "..." : "No token");
  },
  
  getToken() {
    return this.token;
  }
};

// Access Token 발급 함수
const getAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.AMADEUS_API_KEY,
        client_secret: process.env.AMADEUS_API_SECRET,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    tokenManager.setToken(response.data.access_token);
    return tokenManager.getToken();
  } catch (error) {
    console.error("❌ Access Token 발급 실패:", error.message);
    throw error;
  }
};

// Token getter function
const getAmadeusToken = () => {
  const token = tokenManager.getToken();
  console.log("🔑 getAmadeusToken 호출됨:", token ? token.slice(0, 20) + "..." : "No token");
  return token;
};

module.exports = {
  getAmadeusToken,
  getAccessToken
}; 