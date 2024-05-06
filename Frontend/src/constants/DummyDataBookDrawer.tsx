interface resultType {
  pageInfo: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
  list: {
    drawerId: number;
    name: string;
    books: {
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
    }[];
  }[];
}

interface booksType {
  status: number;
  message: string;
  result?: resultType;
}

export const booksResponse: booksType = {
  status: 200,
  message: "성공",
  result: {
    pageInfo: {
      page: 1,
      size: 10,
      totalElements: 100,
      totalPages: 10,
    },
    list: [
      {
        drawerId: 1,
        name: "인공지능",
        books: [
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
          },
        ],
      },
      {
        drawerId: 2,
        name: "IT",
        books: [
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
          },
        ],
      },
    ],
  },
};

// export const booksResponse: booksType | failedBooksType =
// {
//   "status": 500,
//   "message": "서버 오류"
// };

export const emptyBooks = [];
