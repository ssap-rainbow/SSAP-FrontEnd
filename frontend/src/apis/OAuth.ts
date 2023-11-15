const CLIENT_ID = process.env.REACT_APP_JAVASCRIPT_API_KEY;
const REDIRECT_URI: string = process.env.REACT_APP_JAVASCRIPT_API_KEY || "";

const encodedRedirectUri = encodeURIComponent(REDIRECT_URI);

// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

// TODO URL &response_type=code 짤리는 오류
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodedRedirectUri}&response_type=code`;
