import { ErrandFormData } from "../types/errand";
import api from "./api";

// TODO 사용자 데이터로 변경 예정
const userEmail = "ssap.rainbow@gmail.com";

// 심부름 요청 데이터 보내기
export const ErrandRequestPost = async (errandFormData: ErrandFormData) => {
  const formData = {
    ...errandFormData,
    email: userEmail, // 이메일 추가
  };
  console.log("ErrandRequestPost", formData);
  try {
    const response = await api.post(`/api/request`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error(error);
    throw error;
  }
};

// 심부름 내역 가져오기
export const getErrands = async () => {
  try {
    const response = await api.get(`/api/errands`, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error(error);
    throw error;
  }
};
