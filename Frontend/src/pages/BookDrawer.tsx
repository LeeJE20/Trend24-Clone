import styled from "styled-components";

const books = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    description: "A book about dark magic and friendship",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A book about a hobbit and a dragon",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A book about the roaring twenties",
  },
];

const BookDrawer = () => {
  return (
    <BookDrawerContainer>
      <Title>Book Drawer</Title>
      <ContentContainer>
        {books.map((book, index) => (
          <Book key={index}>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
            <BookDescription>{book.description}</BookDescription>
          </Book>
        ))}
      </ContentContainer>
    </BookDrawerContainer>
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  border: 1px solid #000;
`;

const ContentContainer = styled.div`
  height: 90%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;

const BookTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 1px solid #000;
`;

const BookAuthor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 1px solid #000;
`;

const BookDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 1px solid #000;
`;

export default BookDrawer;
