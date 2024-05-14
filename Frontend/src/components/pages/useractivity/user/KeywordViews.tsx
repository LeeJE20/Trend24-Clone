import styled from "styled-components";
import { useState } from "react";

const dummyKeywords = [
  {
    id: 1,
    keyword: "키워드1",
    category: "IT",
    views: 100,
  },
  {
    id: 2,
    keyword: "키워드2",
    category: "IT",
    views: 100,
  },
  {
    id: 3,
    keyword: "키워드3",
    category: "IT",
    views: 100,
  },
  {
    id: 4,
    keyword: "키워드4",
    category: "IT",
    views: 100,
  },
  {
    id: 5,
    keyword: "키워드5",
    category: "IT",
    views: 100,
  },
];

const Modal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
}) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>주간 등장 추이</ModalTitle>
        <ModalCloseButton onClick={() => setIsModalOpen(false)}>
          닫기
        </ModalCloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
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

const ModalContent = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const ModalTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ModalCloseButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #343a40;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

const KeywordViews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showWeeklyKewyword = () => {
    setIsModalOpen(true);
  };

  return (
    <Container>
      <Title>키워드 조회수 Top 5</Title>
      <Content>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>순위</TableHeadCell>
              <TableHeadCell>키워드</TableHeadCell>
              <TableHeadCell>카테고리</TableHeadCell>
              <TableHeadCell>조회수</TableHeadCell>
              <TableWeekly>주간 등장 추이</TableWeekly>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyKeywords.map((keyword, index) => (
              <TableRow key={keyword.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{keyword.keyword}</TableCell>
                <TableCell>{keyword.category}</TableCell>
                <TableCell>{keyword.views}</TableCell>
                <TableWeekly>
                  <button onClick={showWeeklyKewyword}>click</button>
                </TableWeekly>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Content>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
  justify-content: center;
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: border-box;
`;

const TableHead = styled.thead`
  background-color: #f8f9fa;
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid #dee2e6;
  &:last-child {
    border-bottom: none;
  }
  box-sizing: border-box;
`;

const TableHeadCell = styled.th`
  padding: 10px;
  box-sizing: border-box;
`;

const TableBody = styled.tbody`
  width: 100%;
  box-sizing: border-box;
`;

const TableCell = styled.td`
  padding: 10px;
  box-sizing: border-box;
`;

const TableWeekly = styled.td`
  padding: 10px;
  box-sizing: border-box;
`;

export default KeywordViews;
