export interface CustomizedComponentList {
  componentName: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export const customizedComponentListData: CustomizedComponentList[] = [
  {
    componentName: "UserActivityWeekly",
    position: { x: 600, y: 200 },
    size: { width: 400, height: 200 },
  },
  {
    componentName: "UserActivityMonthly",
    position: { x: 200, y: 100 },
    size: { width: 400, height: 200 },
  },
  {
    componentName: "UserActivityDaily",
    position: { x: 300, y: 200 },
    size: { width: 400, height: 300 },
  },
];

export const emptyListData = [];

interface referenceType {
  platformId: number;
  platform: string;
  data: {
    uri: string;
    contents: string;
  };
}

export const referenceData: referenceType = {
  // platformId: 1,
  // platform: "X",
  // data: {
  //   uri: "https://www.naver.com",
  //   contents: "‘귀염 뽀짝’ 외모로 동네 지키는 성동구 반려견 순찰대 ‘호두’",
  // },

  // {
    // platformId: 2,
    // platform :  "Youtube",
    // data: {
    //   uri: "https://www.naver.com",
    //   contents: "‘귀염 뽀짝’ 외모로 동네 지키는 성동구 반려견 순찰대 ‘호두’"
    // }
  // }
  // {
    platformId: 3,
    platform :  "GoogleTrends",
    data: {
      uri: "",
      contents: ""
    }
  // }
};