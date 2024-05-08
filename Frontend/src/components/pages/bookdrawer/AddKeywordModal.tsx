import React, { useState } from "react";
import styled from "styled-components";

type Keyword = {
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
};

const AddKeywordModal = ({
  toggleAddKeywordModal,
  addKeyword,
}: {
  toggleAddKeywordModal: () => void;
  addKeyword: (keyword: Keyword) => void;
}) => {
  const [inputValue, setInputValue] = useState(""); // 입력 값을 상태로 관리

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // 이벤트 버블링 방지
  };

  const handleAddClick = () => {
    // 입력 값이 존재하는지 확인하고, 존재한다면 addBookList 함수 호출
    if (inputValue.trim() !== "") {
      const newKeyword: Keyword = { drawerId: 1, name: inputValue, books: [] };
      addKeyword(newKeyword); // addBookList 함수 호출하여 새로운 책 정보 전달
      setInputValue(""); // 입력 값 초기화
    }
  };

  return (
    <Container>
      <Background onClick={toggleAddKeywordModal}>
        <AddKeywordModalContainer onClick={handleBackgroundClick}>
          <AddKeywordModalTitle>키워드 추가</AddKeywordModalTitle>
          <AddKeywordModalContent>
            <AddKeywordModalInput
              placeholder="키워드"
              value={inputValue} // 입력 값과 input 요소를 바인딩
              onChange={(e) => setInputValue(e.target.value)} // 입력 값이 변경될 때마다 상태 업데이트
            />
            <AddKeywordModalBtn
              onClick={() => {
                handleAddClick();
              }}
            >
              추가
            </AddKeywordModalBtn>
          </AddKeywordModalContent>
          <AddKeywordModalBtn onClick={toggleAddKeywordModal}>
            닫기
          </AddKeywordModalBtn>
        </AddKeywordModalContainer>
      </Background>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddKeywordModalContainer = styled.div`
  width: 300px;
  height: 200px;
  background-color: #fff; /* 모달 배경색 */
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddKeywordModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AddKeywordModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddKeywordModalInput = styled.input`
  width: 100%;
  height: 30px;
`;

const AddKeywordModalBtn = styled.button`
  width: 100%;
  height: 30px;
`;

export default AddKeywordModal;
