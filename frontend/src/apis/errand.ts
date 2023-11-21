import axios from "axios";
import { ErrandFormData } from "../types/errand";

// TODO 사용자 데이터로 대체 예정
const userEmail = "ssap.rainbow@gmail.com";

// 심부름 요청 데이터 보내기
export const ErrandRequestPost = async (errandFormData: ErrandFormData) => {
  const formData = {
    ...errandFormData,
    email: userEmail, // 이메일 추가
  };
  console.log("ErrandRequestPost", formData);
  try {
    const response = await axios.post("/api/request", formData, {
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
