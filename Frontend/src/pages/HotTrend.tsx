import styled from "styled-components";
import Table from "../components/pages/hottrend/KeywordTable";
import { useState, useEffect } from "react";
import KeywordDetail from "../components/pages/hottrend/KeywordDetail";
import { getTrendKeyword } from "../apis/trendApi";

interface TrendKeywordType {
  date: string;
  words: wordType[];
}

interface wordType{
  keywordId: number;
  name: string;
  clickCount:number;
  ranking: number;
}

const HotTrend = () => {
  const [keyword, setKeyword] = useState<wordType | null>(null); // 키워드의 단어와 id 저장
  const [selectedTable, setSelectedTable] = useState<string>(""); // 날짜 데이터 저장
  const [trendKeyword, setTrendKeyword] = useState<TrendKeywordType[]>([]); // 전체 테이블의 키워드 정보 저장

  // 테이블 클릭 이벤트 
  const handleTableClick = (date: string) => {
    console.log("selectedTable", date);
    
    if (selectedTable == "") {
      setSelectedTable(date);
    } else {
      setSelectedTable("");
      setKeyword(null);
    }
  };

  // 키워드 클릭했을때 이벤트
  const handleKeyword = (key: wordType) => {
    setKeyword(key);
  };
  
  // 데이터 통신
  useEffect(()=>{
    const fetchData = async() =>{
      try{
        return await getTrendKeyword();
      }catch (error){
        console.log(error);
      }
    }
    fetchData().then(res => setTrendKeyword(res));
  },[])

  return (
    <Container>
      <Title>인기 트렌드</Title>
      <Content>
        {trendKeyword.map(
          (list, idx) =>
            (selectedTable === "" || selectedTable === list.date) && (
              <TableWrapper key={idx}>
                <Table
                  date={list.date}
                  columnList={list.words}
                  handleKeyword={handleKeyword}
                  handleTableClick={() => handleTableClick(list.date)}
                  selectedKeyword={keyword}
                />
              </TableWrapper>
            )
        )}

        {selectedTable !== "" && (
          <KeywordDetailWrapper>
            <KeywordDetail keyword={keyword!} />
          </KeywordDetailWrapper>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 2.5rem;
  margin: 20px 10px;
  font-weight: bold;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: hidden;
  border-radius: 10px;
`;

const TableWrapper = styled.div`
  overflow: auto;
  margin-right: 5px;
  flex-grow: 1;
  background-color: white;

  &:first-child {
    box-shadow: 1px 0px 5px 1px #67676755;
  }

  &:last-child {
    box-shadow: 1px 0px 5px 1px #67676755;
  }
`;
const KeywordDetailWrapper = styled.div`
  width: 85%;
`;

export default HotTrend;
