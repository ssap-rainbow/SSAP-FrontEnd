import { Category } from "../types/errand";

export const categories: Category[] = [
  {
    value: "category1",
    text: "배달·퀵",
    detailedItems: [
      { value: "subcategory1-1", text: "편의점 배달" },
      { value: "subcategory1-2", text: "서브 카테고리 1-2" },
    ],
  },
  {
    value: "category2",
    text: "카테고리 2",
    detailedItems: [
      { value: "subcategory2-1", text: "서브 카테고리 2-1" },
      { value: "subcategory2-2", text: "서브 카테고리 2-2" },
    ],
  },
];

export const buttonOtions = {
  preferredGender: ["없음", "남성", "여성"],
  timing: ["지금 즉시", "일정 예약"],
  auctionStatus: ["없음", "직접 설정"],
};
