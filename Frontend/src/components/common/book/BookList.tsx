import { useEffect, useState } from "react";
import styled from "styled-components";
import { PageInfo } from "../../../constants/DummyData/BookListData";
import { GrFormNextLink } from "react-icons/gr";
import { MdOutlineSave } from "react-icons/md";
import BookDrawerSaveModal from "../modal/Modal";
import { BookType } from "../../../constants/Type/Type";
import Colors from "../../../constants/Color";
import CustomDropdown from "../select/Select";
import { getDrawer, postDrawerBook } from "../../../apis/drawerApi";

interface BookListProps {
  title: string;
  bookList: BookType[];
  pageInfo: PageInfo;
  onNextPage: () => void;
  onPrevPage: () => void;
}
interface ModalDataType {
  listName: string;
  listKey: number;
}

const BookList = ({
  title,
  bookList,
  pageInfo,
  onNextPage,
  onPrevPage,
}: BookListProps) => {
  const [expandedBookIndices, setExpandedBookIndices] = useState<boolean[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalDataType[]>([]);
  const [modalState, setModalState] = useState<boolean | null>(null);
  const [selectedItem, setSelectedItem] = useState<ModalDataType>({
    listName: "Selected item",
    listKey: 0,
  });

  const selectItem = (item: ModalDataType) => {
    setSelectedItem(item);
  };

  // 토글 함수
  const toggleBookContent = (index: number) => {
    setExpandedBookIndices((prevState) =>
      prevState.map((state, idx) => (idx === index ? !state : state))
    );
  };

  // 초기화 이펙트
  useEffect(() => {
    setExpandedBookIndices(Array(bookList.length).fill(false));
  }, [bookList]);

  // 저장 버튼 클릭 핸들러
  const handleSaveButtonClick = (bookId:number) => {
    console.log("bookId", bookId);
    
    setSelectedItem({ listName: "Selected item", listKey: -1 });
    setModalOpen(!modalOpen);
  };

  // 서랍 키워드 api 호출
  const getDrawerKeyword = async () => {
    try {
      return await getDrawer({
        showList: true,
        page: 0,
        size: 100000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 서랍 책 추가 api 호출
  const addDrawerBook = async (bookId: number) => {
    try {
      return await postDrawerBook(selectedItem.listKey, bookId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDrawerKeyword().then((res) => {
      setModalContent(
        res.map((x: { drawerId: number; name: string; books: [] }) => ({
          listName: x.name,
          listKey: x.drawerId,
        }))
      );
    });
  }, [title]);

  const saveBook = (bookId: number) => {
    console.log("bookId: 이게 찐 ", bookId);
    if (selectedItem.listKey == -1) {
      setModalState(false);
      setTimeout(() => {
        setModalState(null);
        setSelectedItem({ listName: "Selected item", listKey: -1 });
      }, 2300);
    } else {
      addDrawerBook(bookId)
        .then(() => {
          setModalState(true);
          setTimeout(() => {
            setModalOpen(false); // 3초 뒤에 모달을 닫음
            setModalState(null);
            setSelectedItem({ listName: "Selected item", listKey: -1 });
          }, 1900);
        })
        .catch((error) => {
          console.log(error);
          setModalState(false);
          setTimeout(() => {
            setModalState(null);
            setSelectedItem({ listName: "Selected item", listKey: -1 });
          }, 2300);
        });
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <BookListContainer>
        {bookList &&
          bookList.length !== 0 &&
          bookList.map((book: BookType, index: number) => (
            <BookContainer key={index}>
              <BookCover
                $hovered={hoveredIndex === index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleSaveButtonClick(book.bookId)}
              >
                <img
                  src={`https://image.yes24.com/goods/${book.productId}/XL`}
                  alt="Book Cover"
                />
                {hoveredIndex === index && (
                  <div className="saveBtn">
                    <MdOutlineSave /> 저장
                  </div>
                )}
              </BookCover>
              <BookDrawerSaveModal
                isOpen={modalOpen}
                onClose={() => {
                  handleSaveButtonClick(book.bookId);
                }}
              >
                {modalState == null && (
                  <>
                    <ModalBody>
                      <div className="title">서랍에 추가</div>
                      <CustomDropdown
                        itemList={modalContent}
                        onSelectItem={selectItem}
                        selectedItem={selectedItem}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <div
                        className="saveBtn"
                        onClick={() => saveBook(book.bookId)}
                      >
                        저장 저장
                      </div>
                    </ModalFooter>
                  </>
                )}
                {modalState === true && (
                  <ModalState>
                    <img className="icon" src="/Image/Modal/save.gif" />
                    도서 저장 성공
                  </ModalState>
                )}
                {modalState === false && (
                  <ModalState>
                    <img className="icon" src="/Image/Modal/fail.gif" />
                    도서 저장 실패
                    <br />
                    다시 키워드를 선택해주세요.
                  </ModalState>
                )}
              </BookDrawerSaveModal>
              <BookInfo>
                <div className="title">{book.productName}</div>
                {expandedBookIndices[index] ? (
                  <div>줄거리 : {book.contents}</div>
                ) : (
                  <>
                    <div>id : {book.bookId}</div>
                    <div>가격 : {book.salePrice}</div>
                    <div>유입 검색어 : {book.searchKeyword}</div>
                    <div>클릭수 : {book.totalClickCount}</div>
                    <div>판매량 : {book.totalOrderCount}</div>
                    <div>총 판매금액 : {book.totalOrderAmount}</div>
                    <div>카테고리 : {book.categoryName}</div>

                    {book.keywords && (
                      <div>키워드 : {book.keywords.map((x) => " # " + x)}</div>
                    )}
                  </>
                )}
                <NextBtn onClick={() => toggleBookContent(index)}>
                  <GrFormNextLink />
                </NextBtn>
              </BookInfo>
            </BookContainer>
          ))}
      </BookListContainer>
      <Pagination>
        <button onClick={onPrevPage} disabled={pageInfo.page === 1}>
          Prev
        </button>
        <span>
          {pageInfo.page} / {pageInfo.totalPages}
        </span>
        <button
          onClick={onNextPage}
          disabled={pageInfo.page === pageInfo.totalPages}
        >
          Next
        </button>
      </Pagination>
    </Container>
  );
};

// 스타일 컴포넌트
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  width: 100%;
`;

const BookListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 20px;
  overflow-y: auto;
`;

const BookContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 20px;
  /* min-width: 450px; */
  box-sizing: border-box;
  border: 3px solid ${Colors.sub4};
`;

const BookCover = styled.div<{ $hovered: boolean }>`
  width: 30%;
  max-width: 150px;
  position: relative;
  cursor: pointer;
  margin-right: 20px;

  img {
    height: fit-content;
    width: 100%;
    /* min-width: ; */
    margin-right: 20px;
    transition: filter 0.3s ease-in-out;
    filter: ${({ $hovered }) => ($hovered ? "brightness(70%)" : "none")};
    border-radius: 0px 10px 10px 0px;
  }

  .saveBtn {
    display: flex;
    background-color: #000000bb;
    font-size: 1.5rem;
    position: absolute;
    width: max-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px;
    border-radius: 20px;
    svg {
      font-size: 2rem;
      margin-right: 5px;
    }
  }
`;

const BookInfo = styled.div`
  width: 70%;
  padding: 10px;
  border-radius: 20px;
  font-size: 1.5rem;
  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const NextBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 4rem;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #aaa;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
const ModalBody = styled.div`
  padding: 30px;
  .title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 3rem;
    font-weight: bold;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 30px 30px;
  .saveBtn {
    display: inline-flex;
    width: auto;
    padding: 15px 25px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.sub1};
    color: #ffffff;
    font-size: 1.6rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
      transition: opacity 0.1s ease-out;
    }
  }
`;

const ModalState = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 150%;
  font-size: 3rem;
  margin-bottom: 50px;
  .icon {
    width: 30%;
    height: auto;
    margin: 10px;
  }
`;
export default BookList;