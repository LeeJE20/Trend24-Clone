import { useEffect } from "react";
import styled from "styled-components";

interface KeywordCalendarType {
  date: string;
  ranking: number;
}

const KeywordCalendar = (rankingData: KeywordCalendarType[]) => {
  console.log("rankingData", rankingData.length);
  
  // rankingData의 길이가 1 이상인 경우에만 렌더링
  if (rankingData.length > 0) {
    console.log("rankingData", rankingData);
    
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const baseDate = new Date(rankingData[0].date);
    const dayOfWeek = rankingData.map((li) => li.date.split("-")[2]);
    const date = [...Array(7)].map(
      (_, i) => days[(baseDate.getDay() - i + 7) % 7]
    );
    const inChart = rankingData.map((li) => (li.ranking > 0 ? true : false));

    const CalendarObject = dayOfWeek.map((_, index) => ({
      dayOfWeek: dayOfWeek[index],
      date: date[index],
      inChart: inChart[index],
    }));

    return (
      <Container>
        <Title>키워드</Title>
        <DateLabel>
          {baseDate.getFullYear()}년 {baseDate.getMonth() + 1}월
        </DateLabel>
        <CalendarWrapper>
          {CalendarObject.map((calendar, index) => (
            <DayList key={index} $inChart={calendar.inChart}>
              <div className="dayOfWeek">{calendar.dayOfWeek}</div>
              <div className="date">{calendar.date}</div>
            </DayList>
          ))}
        </CalendarWrapper>
      </Container>
    );
  } else {
    return null; // rankingData의 길이가 0이면 null을 반환하여 렌더링하지 않음
  }
};

const Container = styled.div`
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
  /* overflow: hidden; */
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const DateLabel = styled.div`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  color: #005096;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const DayList = styled.div<{ $inChart: boolean }>`
  width: 10%;
  height: 10%;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  border-radius: 40px;
  padding: 15px 0px;
  background-color: ${({ $inChart }) => ($inChart ? "#224861" : "transparent")};
  color: ${({ $inChart }) => ($inChart ? "white" : "black")};

  /* &:hover {
    background: ${({ $inChart }) => ($inChart ? "#224861" : "transparent")};
    color: ${({ $inChart }) => ($inChart ? "white" : "black")};

    .dayOfWeek {
      color: ${({ $inChart }) => ($inChart ? "white" : "black")};
    }
  } */

  .dayOfWeek {
    font-size: 1em;
    align-items: center;
    justify-content: center;

    text-align: center;
    margin-bottom: 20px;
  }

  .date {
    font-weight: bold;
  }
`;

export default KeywordCalendar;
