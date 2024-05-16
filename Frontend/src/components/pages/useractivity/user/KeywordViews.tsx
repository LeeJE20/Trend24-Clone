import styled from "styled-components";
import { useEffect, useState } from "react";

const data = {
  status: 200,
  message: "성공",
  result: {
    list: [
      {
        categories: [
          {
            trendCategoryName: "건강",
          },
          {
            trendCategoryName: "뉴스",
          },
        ],
        keywordName: "관절염",
        clickCountSum: 4,
      },
      {
        categories: [
          {
            trendCategoryName: "건강",
          },
          {
            trendCategoryName: "뉴스",
          },
        ],
        keywordName: "관절염",
        clickCountSum: 4,
      },
      {
        categories: [
          {
            trendCategoryName: "건강",
          },
          {
            trendCategoryName: "뉴스",
          },
        ],
        keywordName: "관절염",
        clickCountSum: 4,
      },
      {
        categories: [
          {
            trendCategoryName: "건강",
          },
          {
            trendCategoryName: "뉴스",
          },
        ],
        keywordName: "관절염",
        clickCountSum: 4,
      },
      {
        categories: [
          {
            trendCategoryName: "건강",
          },
          {
            trendCategoryName: "뉴스",
          },
        ],
        keywordName: "관절염",
        clickCountSum: 4,
      },
    ],
  },
};

const data2 = {
  status: 200,
  message: "성공",
  result: {
    list: [
      {
        date: "2024-05-16",
        trend: true,
      },
      {
        date: "2024-05-15",
        trend: false,
      },
      {
        date: "2024-05-14",
        trend: true,
      },
      {
        date: "2024-05-13",
        trend: false,
      },
      {
        date: "2024-05-12",
        trend: true,
      },
      {
        date: "2024-05-11",
        trend: false,
      },
      {
        date: "2024-05-10",
        trend: true,
      },
    ],
  },
};

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

interface weekdataProps {
  date: string;
  trend: boolean;
}

const KeywordViews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [weekdata, setWeekdata] = useState<weekdataProps[]>([]);
  const [clickedKeywordName, setClickedKeywordName] = useState("");

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const formatNumber = (num: number) => `0${num}`.slice(-2);
    const weekdates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(year, month, day - i);
      return `${d.getFullYear()}-${formatNumber(
        d.getMonth() + 1
      )}-${formatNumber(d.getDate())}`;
    });

    setWeekdata(
      weekdates.map((date) => {
        const weeklyData = data2.result.list.find((d) => d.date === date);
        return {
          date,
          trend: weeklyData ? weeklyData.trend : false,
        };
      })
    );
  }, []);

  const showWeeklyKeyword = (keywordName: string) => {
    setIsTableOpen(true);

    setClickedKeywordName(keywordName);
  };

  const goback = () => {
    setIsTableOpen(false);
  };

  return (
    <Container>
      <Title>키워드 조회수 Top 5</Title>
      {isTableOpen ? (
        <Content>
          <WeeklyData>
            <TableIndex>
              <TableContent1>주간 등장 추이</TableContent1>
              <BackBtn onClick={goback}>원래대로</BackBtn>
            </TableIndex>
            <TableIndex>
              <TableContent1>키워드</TableContent1>
              <TableContent2>{clickedKeywordName}</TableContent2>
            </TableIndex>
            {weekdata.map((data, index) => (
              <TableIndex key={index}>
                <TableContent1>{data.date}</TableContent1>
                <TableContent2>{data.trend ? "상승" : "하락"}</TableContent2>
              </TableIndex>
            ))}
          </WeeklyData>
        </Content>
      ) : (
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
              {data.result.list.map((keyword, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{keyword.keywordName}</TableCell>
                  <TableCell>
                    {keyword.categories.map((category, categoryIndex) => (
                      <span key={categoryIndex}>
                        {category.trendCategoryName}
                      </span>
                    ))}
                  </TableCell>
                  <TableCell>{keyword.clickCountSum}</TableCell>
                  <TableWeekly>
                    <button
                      onClick={() => showWeeklyKeyword(keyword.keywordName)}
                    >
                      click
                    </button>
                  </TableWeekly>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Content>
      )}
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
  font-size: 3rem;
  font-weight: 600;
  height: 10%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 100%;
  box-sizing: border-box;
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
  background-color: #5f996d;
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid #dee2e6;
  &:last-child {
    border-bottom: none;
  }
  box-sizing: border-box;
  text-align: center;
`;

const TableHeadCell = styled.th`
  font-size: 2rem;
  box-sizing: border-box;
`;

const TableBody = styled.tbody`
  font-size: 1.5rem;
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

const WeeklyData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #c2cec5;
`;

const TableIndex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const TableContent1 = styled.div`
  width: 100%;
  height: 20%;
`;
const TableContent2 = styled.div`
  width: 100%;
  height: 80%;
`;

const BackBtn = styled.div`
  width: 100%;
  height: 80%;
  background-color: #5f996d;
  color: white;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #c1e1d2;
  }
`;

export default KeywordViews;
