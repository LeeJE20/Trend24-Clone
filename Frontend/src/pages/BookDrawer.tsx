import { useEffect, useState } from "react";
import styled from "styled-components";
// import ViewModal from "../components/pages/bookdrawer/viewModal";
import AddKeywordModal from "../components/pages/bookdrawer/AddKeywordModal";

import { RiArchiveDrawerFill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "../components/common/modal/Modal";

// import { booksResponse } from "../constants/DummyDataBookDrawer";
import Colors from "../constants/Color";
import { getDrawer } from "../apis/drawerApi";

interface keywordlistType {
  drawerId: number;
  name: string;
  books: {
    bookId: number;
    productId: number;
    searchKeyword: string;
    totalClickCount: number;
    totalOrderCount: number;
    totalOrderAmount: number;
    contents: string;
    productName: string;
    salePrice: number;
    categoryName: string;
    totalPurchaseCount: number | null;
  }[];
}

const BookDrawer = () => {
  // const [isViewModal, setIsViewModal] = useState(false);
  const [showAddKeywordModal, setShowAddKeywordModal] = useState(false);
  const [keywordBooks, setKeywordBooks] = useState<keywordlistType[]>([]);

  const toggleKeywordModal = () => {
    setShowAddKeywordModal(!showAddKeywordModal);
  };

  // const toggleViewModal = () => {
  //   setIsViewModal(!isViewModal);
  // };

  const addKeyword = (newKeyword: keywordlistType) => {
    // newKeyword 매개변수 타입 추가
    setKeywordBooks((prevBooks) => [...prevBooks, newKeyword]); // 이전 상태를 기반으로 새로운 키워드 추가
  };

  const getDrawerData = () => {
    try{
      return getDrawer({showList:true, page:0, size:1000});
    }catch(error){
      console.log(error);
    }
  };

  useEffect(()=>{
    getDrawerData()?.then((res)=>{
      console.log(res);
      setKeywordBooks(res)
    })
  },[]);

  return (
    <>
      <BookDrawerContainer>
        <TitleContainer>
          <Title>
            <RiArchiveDrawerFill className="icon" />
            도서 서랍
          </Title>
          {keywordBooks.length > 0 && ( // keywordBooks가 비어있지 않을 때만 렌더링
            <AddBtn onClick={toggleKeywordModal}>
              <FaPlusCircle className="icon" /> 키워드 추가
            </AddBtn>
          )}
        </TitleContainer>

        <ContentContainer>
          {keywordBooks.length > 0 ? ( // keywordBooks가 비어있지 않을 때만 렌더링
            keywordBooks.map((drawer, index) => {
              console.log(drawer);

              return (
                <Drawer key={index}>
                  <DrawerTitle># {drawer.name}</DrawerTitle>
                  <BookContainer>
                    {drawer.books.map((book, index) => (
                      <Book key={index}>
                        <BookImg
                          src={`https://image.yes24.com/goods/${book.productId}/XL`}
                          alt="book1"
                        />
                        <BookTitle>{book.productName}</BookTitle>
                      </Book>
                    ))}
                  </BookContainer>
                </Drawer>
              );
            })
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
      {showAddKeywordModal && (
        <Modal
          isOpen={showAddKeywordModal}
          onClose={() => {
            setShowAddKeywordModal(false);
          }}
        >
          <AddKeywordModal
            setShowAddKeywordModal={toggleKeywordModal}
            addKeyword={addKeyword} // addKeyword 함수 직접 전달
          />
          {/* <AddKeywordModalContent /> */}

        </Modal>
      )}
      {/* {isViewModal && <ViewModal toggleViewModal={toggleViewModal} />} */}
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
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  text-align: start;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 20px 10px;
  .icon {
    font-size: 3rem;
    color: #313131;
    margin-right: 10px;
  }
`;

const AddBtn = styled.div`
  display: flex;
  width: 10%;
  font-size: 2rem;
  align-content: center;
  align-self: center;
  cursor: pointer;
  .icon {
    font-size: 3rem;
    margin-right: 10px;
  }
  &:hover {
    color: ${Colors.main};
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-items: first baseline;
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
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);
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
`;

const BookContainer = styled.div`
  display: grid;
  width: 100%;
  height: 90%;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  overflow: auto;
  overflow-x: hidden;
`;

const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const BookTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 1vw;
  margin-top: 5px;
`;

const BookImg = styled.img`
  width: 100%;
  height: 80%;
`;

const EmptyDrawer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10%;
  width: 80%;
  height: 60%;
  background-color: #ffffff;
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
