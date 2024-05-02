// 트렌드 검색 페이지 더미데이터
interface CategoryKeywordData {
  [category: string]: string[];
}

export const categoryKeywordData: string[] = [
  "인공지능",
  "IoT",
  "블록체인",
  "자동화",
  "IT",
  "빅데이터",
];
export const c: object[] = [
  { it: ["인공지능", "IoT", "블록체인", "자동화", "IT", "빅데이터"] },
  { 부동산: ["인공지능", "IoT", "블록체인", "자동화", "IT", "빅데이터"] },
];

// 도서 목록 더미 데이터
export interface Book {
  product_id: number;
  product_name: string;
  sale_price: number;
  search_keyword: string;
  total_click_count: number;
  total_order_count: number;
  total_order_amount: number;
  category_name: string;
  contents: string;
}

export const bookListData: Book[] = [
  {
    product_id: 102582,
    product_name: "제품디자인 기사 산업기사",
    sale_price: 18000.0,
    search_keyword: "제품디자인산업기사",
    total_click_count: 1,
    total_order_count: 0,
    total_order_amount: 0,
    category_name: "수험서 자격증",
    contents:
      "본서는 저자의 실무 경험과 이론적 바탕을 근거로 시험에 필요한 이론과 문제를 출제 기준에 맞추어 구체적으로 알기 쉽게 정리하였다. 특히, 시험에 완벽 대비할 수 있도록 예상문제와 기출문제를 수록하여 구성하였다.",
  },
  {
    product_id: 102583,
    product_name: "제품디자인 기사 산업기사",
    sale_price: 18000.0,
    search_keyword: "제품디자인산업기사",
    total_click_count: 1,
    total_order_count: 0,
    total_order_amount: 0,
    category_name: "수험서 자격증",
    contents:
      "본서는 저자의 실무 경험과 이론적 바탕을 근거로 시험에 필요한 이론과 문제를 출제 기준에 맞추어 구체적으로 알기 쉽게 정리하였다. 특히, 시험에 완벽 대비할 수 있도록 예상문제와 기출문제를 수록하여 구성하였다.",
  },
  {
    product_id: 102587,
    product_name: "제품디자인 기사 산업기사",
    sale_price: 18000.0,
    search_keyword: "제품디자인산업기사",
    total_click_count: 1,
    total_order_count: 0,
    total_order_amount: 0,
    category_name: "수험서 자격증",
    contents:
      "본서는 저자의 실무 경험과 이론적 바탕을 근거로 시험에 필요한 이론과 문제를 출제 기준에 맞추어 구체적으로 알기 쉽게 정리하였다. 특히, 시험에 완벽 대비할 수 있도록 예상문제와 기출문제를 수록하여 구성하였다.",
  },
  {
    product_id: 102518,
    product_name: "제품디자인 기사 산업기사",
    sale_price: 18000.0,
    search_keyword: "제품디자인산업기사",
    total_click_count: 1,
    total_order_count: 0,
    total_order_amount: 0,
    category_name: "수험서 자격증",
    contents:
      "본서는 저자의 실무 경험과 이론적 바탕을 근거로 시험에 필요한 이론과 문제를 출제 기준에 맞추어 구체적으로 알기 쉽게 정리하였다. 특히, 시험에 완벽 대비할 수 있도록 예상문제와 기출문제를 수록하여 구성하였다.",
  },
  {
    product_id: 102500,
    product_name: "제품디자인 기사 산업기사",
    sale_price: 18000.0,
    search_keyword: "제품디자인산업기사",
    total_click_count: 1,
    total_order_count: 0,
    total_order_amount: 0,
    category_name: "수험서 자격증",
    contents:
      "본서는 저자의 실무 경험과 이론적 바탕을 근거로 시험에 필요한 이론과 문제를 출제 기준에 맞추어 구체적으로 알기 쉽게 정리하였다. 특히, 시험에 완벽 대비할 수 있도록 예상문제와 기출문제를 수록하여 구성하였다.",
  },
  {
    product_id: 102530,
    product_name: "제품디자인 기사 산업기사",
    sale_price: 18000.0,
    search_keyword: "제품디자인산업기사",
    total_click_count: 1,
    total_order_count: 0,
    total_order_amount: 0,
    category_name: "수험서 자격증",
    contents:
      "본서는 저자의 실무 경험과 이론적 바탕을 근거로 시험에 필요한 이론과 문제를 출제 기준에 맞추어 구체적으로 알기 쉽게 정리하였다. 특히, 시험에 완벽 대비할 수 있도록 예상문제와 기출문제를 수록하여 구성하였다.",
  },
];

export interface CustomizedComponentList {
  componentName: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export const customizedComponentListData: CustomizedComponentList[] = [
  {
    componentName: "userWeeklyActivity",
    position: { x: 100, y: 500 },
    size: { width: 400, height: 200 },
  },
  {
    componentName: "userMonthlyActivity",
    position: { x: 200, y: 100 },
    size: { width: 400, height: 200 },
  },
  {
    componentName: "userDailyActivity",
    position: { x: 300, y: 200 },
    size: { width: 400, height: 300 },
  },
];

export const emptyListData = [];

export const emptyData = "";
interface HotTrendType {
  [date: string]: string[];
}

// 인기 트렌드 테이블 더미 데이터
export const hotTrend: HotTrendType = {
  "2024/04/20": [
    "테슬라 중국 자율주행",
    "청년내일저축계좌",
    "남영희",
    "식케이",
    "엔화",
    "황우여",
    "제시 마치",
    "근로자의 날",
    "김진경",
    "유재환",
    "중국 광저우 토네이도",
    "멘시티",
    "영수회담",
    "수능 6등급 교대 합격",
    "박성훈",
  ],
  "2024/04/21": [
    "테슬라 중국 자율주행",
    "청년내일저축계좌",
    "남영희",
    "식케이",
    "엔화",
    "황우여",
    "제시 마치",
    "근로자의 날",
    "김진경",
    "유재환",
    "중국 광저우 토네이도",
    "멘시티",
    "영수회담",
    "수능 6등급 교대 합격",
    "박성훈",
  ],
  "2024/04/22": [
    "테슬라 중국 자율주행",
    "청년내일저축계좌",
    "남영희",
    "식케이",
    "엔화",
    "황우여",
    "제시 마치",
    "근로자의 날",
    "김진경",
    "유재환",
    "중국 광저우 토네이도",
    "멘시티",
    "영수회담",
    "수능 6등급 교대 합격",
    "박성훈",
  ],
  "2024/04/23": [
    "테슬라 중국 자율주행",
    "청년내일저축계좌",
    "남영희",
    "식케이",
    "엔화",
    "황우여",
    "제시 마치",
    "근로자의 날",
    "김진경",
    "유재환",
    "중국 광저우 토네이도",
    "멘시티",
    "영수회담",
    "수능 6등급 교대 합격",
    "박성훈",
  ],
  "2024/04/26": [
    "테슬라 중국 자율주행",
    "청년내일저축계좌",
    "남영희",
    "식케이",
    "엔화",
    "황우여",
    "제시 마치",
    "근로자의 날",
    "김진경",
    "유재환",
    "중국 광저우 토네이도",
    "멘시티",
    "영수회담",
    "수능 6등급 교대 합격",
    "박성훈",
  ],
  "2024/04/24": [
    "테슬라 중국 자율주행",
    "청년내일저축계좌",
    "남영희",
    "식케이",
    "엔화",
    "황우여",
    "제시 마치",
    "근로자의 날",
    "김진경",
    "유재환",
    "중국 광저우 토네이도",
    "멘시티",
    "영수회담",
    "수능 6등급 교대 합격",
    "박성훈",
  ],
  "2024/04/25": [
    "테슬라 중국 자율주행",
    "청년내일저축계좌",
    "남영희",
    "식케이",
    "엔화",
    "황우여",
    "제시 마치",
    "근로자의 날",
    "김진경",
    "유재환",
    "중국 광저우 토네이도",
    "멘시티",
    "영수회담",
    "수능 6등급 교대 합격",
    "박성훈",
  ],
};
