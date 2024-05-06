import { useState } from "react";
import styled from "styled-components";
import ViewModal from "../components/pages/bookdrawer/viewModal";
import AddKeywordModal from "../components/pages/bookdrawer/AddKeywordModal";

import { booksResponse } from "../constants/DummyDataBookDrawer";

interface keywordlistType {
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
}

const BookDrawer = () => {
  const [isViewModal, setIsViewModal] = useState(false);
  const [isAddKeywordModal, setIsAddKeywordModal] = useState(false);
  const [keywordBooks, setKeywordBooks] = useState<keywordlistType[]>(
    booksResponse.result?.list || []
  );

  const toggleKeywordModal = () => {
    setIsAddKeywordModal(!isAddKeywordModal);
  };

  const toggleViewModal = () => {
    setIsViewModal(!isViewModal);
  };

  const addKeyword = (newKeyword: keywordlistType) => {
    // newKeyword 매개변수 타입 추가
    setKeywordBooks((prevBooks) => [...prevBooks, newKeyword]); // 이전 상태를 기반으로 새로운 키워드 추가
  };

  return (
    <>
      <BookDrawerContainer>
        <TitleContainer>
          <Title>도서 서랍</Title>
          {keywordBooks.length > 0 && ( // keywordBooks가 비어있지 않을 때만 렌더링
            <BtnBox>
              <AddBtn onClick={toggleKeywordModal}>추가</AddBtn>
              <ViewBtn onClick={toggleViewModal}>보기방식 변경</ViewBtn>
            </BtnBox>
          )}
        </TitleContainer>

        <ContentContainer>
          {keywordBooks.length > 0 ? ( // keywordBooks가 비어있지 않을 때만 렌더링
            keywordBooks.map((drawer, index) => (
              <Drawer key={index}>
                <DrawerTitle># {drawer.name}</DrawerTitle>
                <BookContainer>
                  {drawer.books.map((book, index) => (
                    <Book key={index}>
                      <BookImg
                        src="https://cdn.pixabay.com/photo/2015/09/05/20/02/book-925589_960_720.jpg"
                        alt="book1"
                      />
                      <BookTitle>{book.product_name}</BookTitle>
                    </Book>
                  ))}
                </BookContainer>
              </Drawer>
            ))
          ) : (
            <EmptyDrawer>
              <EmptyImg>
                <img
                  src="https://cdn.pixabay.com/photo/2015/09/05/20/02/book-925589_960_720.jpg"
                  alt="trend24"
                />
              </EmptyImg>
              <EmptyImg />
              <EmptyDataBox>
                <EmptyText>데이터를 추가해주세요</EmptyText>
                <PlusBtnBox>
                  <PLusBtn onClick={toggleKeywordModal}>+ 추가</PLusBtn>
                </PlusBtnBox>
              </EmptyDataBox>
            </EmptyDrawer>
          )}
        </ContentContainer>
      </BookDrawerContainer>
      {isAddKeywordModal && (
        <AddKeywordModal
          toggleAddKeywordModal={toggleKeywordModal}
          addKeyword={addKeyword} // addKeyword 함수 직접 전달
        />
      )}
      {isViewModal && <ViewModal toggleViewModal={toggleViewModal} />}
    </>
  );
};

const BookDrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  border: 1px solid #000;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-align: start;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #000;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  border: 1px solid #000;
`;

const AddBtn = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid #000;
`;

const ViewBtn = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid #000;
`;

const ContentContainer = styled.div`
  height: 90%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-items: first baseline;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
`;

const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  border: 1px solid #000;
`;

const DrawerTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-align: center;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  border: 1px solid #000;
`;

const BookContainer = styled.div`
  display: grid;
  width: 100%;
  height: 90%;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;

const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
`;

const BookTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 1px solid #000;
`;

const BookImg = styled.img`
  width: 100%;
  height: 80%;
  border: 1px solid #000;
`;

const EmptyDrawer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  left: 10%;
  width: 80%;
  height: 60%;
`;

const EmptyImg = styled.div`
  width: 40%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;

  img {
    width: 100%;
    height: 100%;
  }
`;

const EmptyDataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  border: 1px solid #000;
`;

const EmptyText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-align: center;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  border: 1px solid #000;
`;

const PlusBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  width: 100%;
  height: 20%;
  border: 1px solid #000;
`;

const PLusBtn = styled.button`
  width: 50%;
  height: 50%;
  margin-right: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #000;
`;

export default BookDrawer;
