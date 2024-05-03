// 트렌드 검색 페이지 더미데이터
interface CategoryDataType {
  trendCategoryId: number;
  name: string;
  keywords: Keyword[];
}

interface Keyword {
  keywordId: number;
  name: string;
}

export const categoryData:CategoryDataType[] = 
[
  {
      trendCategoryId :  1,
      name : "it",
      keywords: [
          {
              keywordId :  1,
              name : "인공지능",
          },
          {
              keywordId :  2,
              name : "IoT",
          },
          {
            keywordId :  1,
            name : "블록체인",
          },
          {
              keywordId :  2,
              name : "자동화",
          },
          {
            keywordId :  1,
            name : "IT",
          },
          {
              keywordId :  2,
              name : "빅데이터",
          },
      ]
  },
  {
      trendCategoryId :  2,
      name : "부동산",
      keywords: [
          {
              keywordId :  3,
              name : "토비",
          },
      ]
  },
]


// 도서 목록 더미 데이터
export interface Book {
  bookId: number;
  product_id: number;
  search_keyword: string;
  total_click_count: number;
  total_order_count: number;
  total_order_amount: number;
  contents: string;
  product_name: string;
  sale_price: number;
  category_name: string;
  total_purchase_count: number;
  keywords: string[];
}


export const bookListData: Book[] = [
  {
     bookId: 1,
     product_id: 101,
     search_keyword: "리액트",
     total_click_count: 500,
     total_order_count: 100,
     total_order_amount: 5000,
     contents: "리액트에 관한 책이다.",
     product_name: "리액트 훅 인 액션",
     sale_price: 20,
     category_name: "IT",
     total_purchase_count: 50,
     keywords: ["AI", "블록체인"]
  },
  {
    bookId: 1,
    product_id: 101,
    search_keyword: "리액트",
    total_click_count: 500,
    total_order_count: 100,
    total_order_amount: 5000,
    contents: "리액트에 관한 책이다.",
    product_name: "리액트 훅 인 액션",
    sale_price: 20,
    category_name: "IT",
    total_purchase_count: 50,
    keywords: ["AI", "블록체인"]
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
  "2024/04/20": ["테슬라 중국 자율주행", "청년내일저축계좌", "남영희", "식케이", "엔화", "황우여", "제시 마치", "근로자의 날", "김진경", "유재환", "중국 광저우 토네이도", "멘시티", "영수회담", "수능 6등급 교대 합격", "박성훈"],
  "2024/04/21": ["테슬라 중국 자율주행", "청년내일저축계좌", "남영희", "식케이", "엔화", "황우여", "제시 마치", "근로자의 날", "김진경", "유재환", "중국 광저우 토네이도", "멘시티", "영수회담", "수능 6등급 교대 합격", "박성훈"],
  "2024/04/22": ["테슬라 중국 자율주행", "청년내일저축계좌", "남영희", "식케이", "엔화", "황우여", "제시 마치", "근로자의 날", "김진경", "유재환", "중국 광저우 토네이도", "멘시티", "영수회담", "수능 6등급 교대 합격", "박성훈"],
  "2024/04/23": ["테슬라 중국 자율주행", "청년내일저축계좌", "남영희", "식케이", "엔화", "황우여", "제시 마치", "근로자의 날", "김진경", "유재환", "중국 광저우 토네이도", "멘시티", "영수회담", "수능 6등급 교대 합격", "박성훈"],
  "2024/04/26": ["테슬라 중국 자율주행", "청년내일저축계좌", "남영희", "식케이", "엔화", "황우여", "제시 마치", "근로자의 날", "김진경", "유재환", "중국 광저우 토네이도", "멘시티", "영수회담", "수능 6등급 교대 합격", "박성훈"],
  "2024/04/24": ["테슬라 중국 자율주행", "청년내일저축계좌", "남영희", "식케이", "엔화", "황우여", "제시 마치", "근로자의 날", "김진경", "유재환", "중국 광저우 토네이도", "멘시티", "영수회담", "수능 6등급 교대 합격", "박성훈"],
  "2024/04/25": ["테슬라 중국 자율주행", "청년내일저축계좌", "남영희", "식케이", "엔화", "황우여", "제시 마치", "근로자의 날", "김진경", "유재환", "중국 광저우 토네이도", "멘시티", "영수회담", "수능 6등급 교대 합격", "박성훈"],
};

interface referenceType{
  platformId: number;
  platform : string;
  data: {
    uri: string;
    contents : string;
  };
}

export const referenceData: referenceType=
{
  platformId: 1,
  platform :  "X",                        
  data: {
     uri: "https://www.naver.com",
     contents: "‘귀염 뽀짝’ 외모로 동네 지키는 성동구 반려견 순찰대 ‘호두’"
   }
}

// {
//   platformId: 2,
//   platform :  "Youtube",                        
//   data: {
//      uri: "https://www.naver.com",
//      contents: "‘귀염 뽀짝’ 외모로 동네 지키는 성동구 반려견 순찰대 ‘호두’"
//    }
// }
// {
//   platformId: 3,
//   platform :  "GoogleTrends",                        
//   data: {
//      uri: "",
//      contents: ""
//    }
// }


interface trendRankType{
  date: string;
  rank: number;
}

export const trendRank: trendRankType[] = [
  {
    date: "2024-04-25",
    rank: 4,
  },
  {
    date: "2024-04-24",
    rank: 3,
  },
  {
    date: "2024-04-23",
    rank: 4,
  },
  {
    date: "2024-04-22",
    rank: 3,
  },
  {
    date: "2024-04-21",
    rank: 4,
  },
  {
    date: "2024-04-20",
    rank: 3,
  },
  {
    date: "2024-04-19",
    rank: 3,
  },
];

interface trendKeywordType{
  date: string;
  words: trendWordType[];
}

export interface trendWordType{
  keywordId: number, 
  name: string,
  rank: number
}

export const trendKeyword: trendKeywordType[] =  [
  {
      date :  "2024-04-25",
      words: [
        {
          keywordId: 1, 
          name: "미세먼지",
          rank: 1
        },
        {
          keywordId: 2, 
          name: "시나모롤",
          rank: 2                    
        },
        {
          keywordId: 3,
          name: "테슬라 중국 자율주행",
          rank: 3
        },
        {
          keywordId: 4,
          name: "청년내일저축계좌",
          rank: 4
        },
        {
          keywordId: 5,
          name: "남영희",
          rank: 5
        },
        {
          keywordId: 6,
          name: "식케이",
          rank: 6
        },
        {
          keywordId: 7,
          name: "엔화",
          rank: 7
        },
        {
          keywordId: 8,
          name: "황우여",
          rank: 8
        },
        {
          keywordId: 9,
          name: "제시 마치",
          rank: 9
        },
        {
          keywordId: 10,
          name: "근로자의 날",
          rank: 10
        },
        {
          keywordId: 11,
          name: "김진경",
          rank: 11
        },
        {
          keywordId: 12,
          name: "유재환",
          rank: 12
        },
        {
          keywordId: 13,
          name: "중국 광저우 토네이도",
          rank: 13
        },
        {
          keywordId: 14,
          name: "멘시티",
          rank: 14
        },
        {
          keywordId: 15,
          name: "영수회담",
          rank: 15
        },
        {
          keywordId: 16,
          name: "수능 6등급 교대 합격",
          rank: 16
        },
        {
          keywordId: 17,
          name: "박성훈",
          rank: 17
        },
        {
          keywordId: 18,
          name: "금융 시장",
          rank: 18
        },
        {
          keywordId: 19,
          name: "사이버 보안",
          rank: 19
        },
        {
          keywordId: 20,
          name: "휴가 계획",
          rank: 20
        }
       ]
  },
  {
    date :  "2024-04-25",
    words: [
      {
        keywordId: 1, 
        name: "미세먼지",
        rank: 1
      },
      {
        keywordId: 2, 
        name: "시나모롤",
        rank: 2                    
      },
      {
        keywordId: 3,
        name: "테슬라 중국 자율주행",
        rank: 3
      },
      {
        keywordId: 4,
        name: "청년내일저축계좌",
        rank: 4
      },
      {
        keywordId: 5,
        name: "남영희",
        rank: 5
      },
      {
        keywordId: 6,
        name: "식케이",
        rank: 6
      },
      {
        keywordId: 7,
        name: "엔화",
        rank: 7
      },
      {
        keywordId: 8,
        name: "황우여",
        rank: 8
      },
      {
        keywordId: 9,
        name: "제시 마치",
        rank: 9
      },
      {
        keywordId: 10,
        name: "근로자의 날",
        rank: 10
      },
      {
        keywordId: 11,
        name: "김진경",
        rank: 11
      },
      {
        keywordId: 12,
        name: "유재환",
        rank: 12
      },
      {
        keywordId: 13,
        name: "중국 광저우 토네이도",
        rank: 13
      },
      {
        keywordId: 14,
        name: "멘시티",
        rank: 14
      },
      {
        keywordId: 15,
        name: "영수회담",
        rank: 15
      },
      {
        keywordId: 16,
        name: "수능 6등급 교대 합격",
        rank: 16
      },
      {
        keywordId: 17,
        name: "박성훈",
        rank: 17
      },
      {
        keywordId: 18,
        name: "금융 시장",
        rank: 18
      },
      {
        keywordId: 19,
        name: "사이버 보안",
        rank: 19
      },
      {
        keywordId: 20,
        name: "휴가 계획",
        rank: 20
      }
     ]
},
{
  date :  "2024-04-25",
  words: [
    {
      keywordId: 1, 
      name: "미세먼지",
      rank: 1
    },
    {
      keywordId: 2, 
      name: "시나모롤",
      rank: 2                    
    },
    {
      keywordId: 3,
      name: "테슬라 중국 자율주행",
      rank: 3
    },
    {
      keywordId: 4,
      name: "청년내일저축계좌",
      rank: 4
    },
    {
      keywordId: 5,
      name: "남영희",
      rank: 5
    },
    {
      keywordId: 6,
      name: "식케이",
      rank: 6
    },
    {
      keywordId: 7,
      name: "엔화",
      rank: 7
    },
    {
      keywordId: 8,
      name: "황우여",
      rank: 8
    },
    {
      keywordId: 9,
      name: "제시 마치",
      rank: 9
    },
    {
      keywordId: 10,
      name: "근로자의 날",
      rank: 10
    },
    {
      keywordId: 11,
      name: "김진경",
      rank: 11
    },
    {
      keywordId: 12,
      name: "유재환",
      rank: 12
    },
    {
      keywordId: 13,
      name: "중국 광저우 토네이도",
      rank: 13
    },
    {
      keywordId: 14,
      name: "멘시티",
      rank: 14
    },
    {
      keywordId: 15,
      name: "영수회담",
      rank: 15
    },
    {
      keywordId: 16,
      name: "수능 6등급 교대 합격",
      rank: 16
    },
    {
      keywordId: 17,
      name: "박성훈",
      rank: 17
    },
    {
      keywordId: 18,
      name: "금융 시장",
      rank: 18
    },
    {
      keywordId: 19,
      name: "사이버 보안",
      rank: 19
    },
    {
      keywordId: 20,
      name: "휴가 계획",
      rank: 20
    }
   ]
},
{
  date :  "2024-04-25",
  words: [
    {
      keywordId: 1, 
      name: "미세먼지",
      rank: 1
    },
    {
      keywordId: 2, 
      name: "시나모롤",
      rank: 2                    
    },
    {
      keywordId: 3,
      name: "테슬라 중국 자율주행",
      rank: 3
    },
    {
      keywordId: 4,
      name: "청년내일저축계좌",
      rank: 4
    },
    {
      keywordId: 5,
      name: "남영희",
      rank: 5
    },
    {
      keywordId: 6,
      name: "식케이",
      rank: 6
    },
    {
      keywordId: 7,
      name: "엔화",
      rank: 7
    },
    {
      keywordId: 8,
      name: "황우여",
      rank: 8
    },
    {
      keywordId: 9,
      name: "제시 마치",
      rank: 9
    },
    {
      keywordId: 10,
      name: "근로자의 날",
      rank: 10
    },
    {
      keywordId: 11,
      name: "김진경",
      rank: 11
    },
    {
      keywordId: 12,
      name: "유재환",
      rank: 12
    },
    {
      keywordId: 13,
      name: "중국 광저우 토네이도",
      rank: 13
    },
    {
      keywordId: 14,
      name: "멘시티",
      rank: 14
    },
    {
      keywordId: 15,
      name: "영수회담",
      rank: 15
    },
    {
      keywordId: 16,
      name: "수능 6등급 교대 합격",
      rank: 16
    },
    {
      keywordId: 17,
      name: "박성훈",
      rank: 17
    },
    {
      keywordId: 18,
      name: "금융 시장",
      rank: 18
    },
    {
      keywordId: 19,
      name: "사이버 보안",
      rank: 19
    },
    {
      keywordId: 20,
      name: "휴가 계획",
      rank: 20
    }
   ]
},
{
  date :  "2024-04-25",
  words: [
    {
      keywordId: 1, 
      name: "미세먼지",
      rank: 1
    },
    {
      keywordId: 2, 
      name: "시나모롤",
      rank: 2                    
    },
    {
      keywordId: 3,
      name: "테슬라 중국 자율주행",
      rank: 3
    },
    {
      keywordId: 4,
      name: "청년내일저축계좌",
      rank: 4
    },
    {
      keywordId: 5,
      name: "남영희",
      rank: 5
    },
    {
      keywordId: 6,
      name: "식케이",
      rank: 6
    },
    {
      keywordId: 7,
      name: "엔화",
      rank: 7
    },
    {
      keywordId: 8,
      name: "황우여",
      rank: 8
    },
    {
      keywordId: 9,
      name: "제시 마치",
      rank: 9
    },
    {
      keywordId: 10,
      name: "근로자의 날",
      rank: 10
    },
    {
      keywordId: 11,
      name: "김진경",
      rank: 11
    },
    {
      keywordId: 12,
      name: "유재환",
      rank: 12
    },
    {
      keywordId: 13,
      name: "중국 광저우 토네이도",
      rank: 13
    },
    {
      keywordId: 14,
      name: "멘시티",
      rank: 14
    },
    {
      keywordId: 15,
      name: "영수회담",
      rank: 15
    },
    {
      keywordId: 16,
      name: "수능 6등급 교대 합격",
      rank: 16
    },
    {
      keywordId: 17,
      name: "박성훈",
      rank: 17
    },
    {
      keywordId: 18,
      name: "금융 시장",
      rank: 18
    },
    {
      keywordId: 19,
      name: "사이버 보안",
      rank: 19
    },
    {
      keywordId: 20,
      name: "휴가 계획",
      rank: 20
    }
   ]
},
{
  date :  "2024-04-25",
  words: [
    {
      keywordId: 1, 
      name: "미세먼지",
      rank: 1
    },
    {
      keywordId: 2, 
      name: "시나모롤",
      rank: 2                    
    },
    {
      keywordId: 3,
      name: "테슬라 중국 자율주행",
      rank: 3
    },
    {
      keywordId: 4,
      name: "청년내일저축계좌",
      rank: 4
    },
    {
      keywordId: 5,
      name: "남영희",
      rank: 5
    },
    {
      keywordId: 6,
      name: "식케이",
      rank: 6
    },
    {
      keywordId: 7,
      name: "엔화",
      rank: 7
    },
    {
      keywordId: 8,
      name: "황우여",
      rank: 8
    },
    {
      keywordId: 9,
      name: "제시 마치",
      rank: 9
    },
    {
      keywordId: 10,
      name: "근로자의 날",
      rank: 10
    },
    {
      keywordId: 11,
      name: "김진경",
      rank: 11
    },
    {
      keywordId: 12,
      name: "유재환",
      rank: 12
    },
    {
      keywordId: 13,
      name: "중국 광저우 토네이도",
      rank: 13
    },
    {
      keywordId: 14,
      name: "멘시티",
      rank: 14
    },
    {
      keywordId: 15,
      name: "영수회담",
      rank: 15
    },
    {
      keywordId: 16,
      name: "수능 6등급 교대 합격",
      rank: 16
    },
    {
      keywordId: 17,
      name: "박성훈",
      rank: 17
    },
    {
      keywordId: 18,
      name: "금융 시장",
      rank: 18
    },
    {
      keywordId: 19,
      name: "사이버 보안",
      rank: 19
    },
    {
      keywordId: 20,
      name: "휴가 계획",
      rank: 20
    }
   ]
},
{
  date :  "2024-04-25",
  words: [
    {
      keywordId: 1, 
      name: "미세먼지",
      rank: 1
    },
    {
      keywordId: 2, 
      name: "시나모롤",
      rank: 2                    
    },
    {
      keywordId: 3,
      name: "테슬라 중국 자율주행",
      rank: 3
    },
    {
      keywordId: 4,
      name: "청년내일저축계좌",
      rank: 4
    },
    {
      keywordId: 5,
      name: "남영희",
      rank: 5
    },
    {
      keywordId: 6,
      name: "식케이",
      rank: 6
    },
    {
      keywordId: 7,
      name: "엔화",
      rank: 7
    },
    {
      keywordId: 8,
      name: "황우여",
      rank: 8
    },
    {
      keywordId: 9,
      name: "제시 마치",
      rank: 9
    },
    {
      keywordId: 10,
      name: "근로자의 날",
      rank: 10
    },
    {
      keywordId: 11,
      name: "김진경",
      rank: 11
    },
    {
      keywordId: 12,
      name: "유재환",
      rank: 12
    },
    {
      keywordId: 13,
      name: "중국 광저우 토네이도",
      rank: 13
    },
    {
      keywordId: 14,
      name: "멘시티",
      rank: 14
    },
    {
      keywordId: 15,
      name: "영수회담",
      rank: 15
    },
    {
      keywordId: 16,
      name: "수능 6등급 교대 합격",
      rank: 16
    },
    {
      keywordId: 17,
      name: "박성훈",
      rank: 17
    },
    {
      keywordId: 18,
      name: "금융 시장",
      rank: 18
    },
    {
      keywordId: 19,
      name: "사이버 보안",
      rank: 19
    },
    {
      keywordId: 20,
      name: "휴가 계획",
      rank: 20
    }
   ]
},
]