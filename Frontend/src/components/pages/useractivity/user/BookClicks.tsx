import styled from "styled-components";

const dummybooks = [
  {
    id: 1,
    title: "책 제목1",
    imgSrc: "https://via.placeholder.com/150",
    clickNum: 100,
  },
  {
    id: 2,
    title: "책 제목2",
    imgSrc: "https://via.placeholder.com/150",
    clickNum: 100,
  },

  {
    id: 3,
    title: "책 제목3",
    imgSrc: "https://via.placeholder.com/150",
    clickNum: 100,
  },

  {
    id: 4,
    title: "책 제목4",
    imgSrc: "https://via.placeholder.com/150",
    clickNum: 100,
  },

  {
    id: 5,
    title: "책 제목5",
    imgSrc: "https://via.placeholder.com/150",
    clickNum: 100,
  },
];

const BookClicks = () => {
  return (
    <Container>
      <Title>도서 클릭수 Top 5</Title>
      <ContentContainer>
        <Books>
          {dummybooks.map((book) => (
            <Book key={book.id}>
              <BookImg
                style={{ backgroundImage: `url(${book.imgSrc})` }}
              ></BookImg>
              <BookTitle>{book.title}</BookTitle>
              <BookClickNum>{book.clickNum}</BookClickNum>
            </Book>
          ))}
        </Books>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  height: 10%;
  width: 100%;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90%;
  width: 100%;
  box-sizing: border-box;
`;

const Books = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Book = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 200px;
  margin: 10px;
  box-sizing: border-box;
`;

const BookImg = styled.div`
  width: 100px;
  height: 150px;
  background-size: cover;
  background-position: center;
`;

const BookTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const BookClickNum = styled.div`
  font-size: 0.8rem;
`;

export default BookClicks;
