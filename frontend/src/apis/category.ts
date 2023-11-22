import api from "./api";

// 카테고리 리스트 가져오기
export const getCategories = async () => {
  try {
    const response = await api.get(`/api/categories`, {
      headers: {
        // "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    // 오류 처리
    console.error(error);
    throw error;
  }
};
