export const CLIENT_ID = process.env.REACT_APP_JAVASCRIPT_API_KEY;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=8fff620ae3c08a65ad853f0562846d38&redirect_uri=http://localhost:3000/login/oauth2/code/kakao&response_type=code`;

// TODO 로컬 TEST용
export const APP_URL = process.env.REACT_APP_URL;
export const accessToken = process.env.REACT_APP_ACCESSTOKEN;
