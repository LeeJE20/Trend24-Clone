import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const data = {
  status: 200,
  message: "성공",
  result: {
    list: [
      {
        name: "ANIMAL",
        keywords: [
          {
            name: "푸바오",
            freq: 3,
          },
        ],
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
            keywords: ["AI", "블록체인"],
          },
          {
            bookId: 2,
            product_id: 102,
            search_keyword: "역사",
            total_click_count: 300,
            total_order_count: 80,
            total_order_amount: 4000,
            contents: "역사는 중요하다",
            product_name: "역사는 흐른다",
            sale_price: 25,
            category_name: "역사",
            total_purchase_count: 40,
            keywords: ["AI", "블록체인"],
          },
        ],
      },
      {
        name: "IT",
        keywords: [
          {
            name: "푸바오",
            freq: 3,
          },
        ],
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
            keywords: ["AI", "블록체인"],
          },
          {
            bookId: 2,
            product_id: 102,
            search_keyword: "역사",
            total_click_count: 300,
            total_order_count: 80,
            total_order_amount: 4000,
            contents: "역사는 중요하다",
            product_name: "역사는 흐른다",
            sale_price: 25,
            category_name: "역사",
            total_purchase_count: 40,
            keywords: ["AI", "블록체인"],
          },
        ],
      },
      {
        name: "NEWS",
        keywords: [
          {
            name: "푸바오",
            freq: 3,
          },
        ],
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
            keywords: ["AI", "블록체인"],
          },
          {
            bookId: 2,
            product_id: 102,
            search_keyword: "역사",
            total_click_count: 300,
            total_order_count: 80,
            total_order_amount: 4000,
            contents: "역사는 중요하다",
            product_name: "역사는 흐른다",
            sale_price: 25,
            category_name: "역사",
            total_purchase_count: 40,
            keywords: ["AI", "블록체인"],
          },
        ],
      },
      {
        name: "ENTERTAINMENT",
        keywords: [
          {
            name: "푸바오",
            freq: 3,
          },
        ],
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
            keywords: ["AI", "블록체인"],
          },
          {
            bookId: 2,
            product_id: 102,
            search_keyword: "역사",
            total_click_count: 300,
            total_order_count: 80,
            total_order_amount: 4000,
            contents: "역사는 중요하다",
            product_name: "역사는 흐른다",
            sale_price: 25,
            category_name: "역사",
            total_purchase_count: 40,
            keywords: ["AI", "블록체인"],
          },
        ],
      },
      {
        name: "NEWMEDIA",
        keywords: [
          {
            name: "푸바오",
            freq: 3,
          },
        ],
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
            keywords: ["AI", "블록체인"],
          },
          {
            bookId: 2,
            product_id: 102,
            search_keyword: "역사",
            total_click_count: 300,
            total_order_count: 80,
            total_order_amount: 4000,
            contents: "역사는 중요하다",
            product_name: "역사는 흐른다",
            sale_price: 25,
            category_name: "역사",
            total_purchase_count: 40,
            keywords: ["AI", "블록체인"],
          },
        ],
      },
    ],
  },
};

interface TrendDataProps {
  name: string;
  keywords: { name: string; freq: number }[];
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
    keywords: string[];
  }[];
}

const GeneralRecommend = () => {
  const [trendList, setTrendList] = useState<TrendDataProps[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    setTrendList(data.result.list);
  }, []);

  const gotoRecommendPage = (title: string) => {
    navigate(`/event/general/recommend`, { state: { title } });
  };

  return (
    <Container>
      {trendList.map((trend, index) => (
        <Ball
          $title={trend.name}
          key={trend.name}
          onClick={() => gotoRecommendPage(trend.name)}
        >
          <Text> {trend.name}</Text>
        </Ball>
      ))}
    </Container>
  );
};

interface BallProps {
  $title: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    ". . ANIMAL . . "
    ". . . . NEWMEDIA "
    "IT . . . ."
    ". . . ENTERTAINMENT ."
    ". NEWS . . .";
  height: 100%;
  width: 100%;

  background-image: url("/Image/EventPage/GeneralRecommend/generalbackground.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  display: none;
`;

const Ball = styled.div<BallProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: #f8f8f8;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 5vh;
  height: 5vh;
  aspect-ratio: 1/1;
  grid-area: ${({ $title }) => $title};
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    transform: translate(-50%, -50%) scale(3.5);
    transition: 0.5s;
  }
  &:hover ${Text} {
    display: block;
  }
`;

export default GeneralRecommend;
