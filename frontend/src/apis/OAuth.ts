const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
// const CLIENT_ID = process.env.KAKAO_CLIENT_ID;

const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
// const REDIRECT_URI = process.env.KAKAO_REDIRECT_URL;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=2973b10a274c7944e2e65ead4ef8370e&redirect_uri=https://k0afbd0de17bfa.user-app.krampoline.com/api/oauth/kakao/callback&response_type=code`;
