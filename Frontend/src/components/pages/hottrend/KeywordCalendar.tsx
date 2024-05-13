import styled from "styled-components";
import { TrendRankType } from "../../../constants/DummyData/TrendRankData";

interface KeywordCalendarProps {
  rankData: TrendRankType[];
}

interface DateType {
  dayOfWeek: string;
  date: number;
  inChart: boolean;
}

const KeywordCalendar = (props: KeywordCalendarProps) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const baseDate = new Date(props.rankData[0].date);  
  const dayOfWeek = props.rankData.map((li) => li.date.split("-")[2]);
  const date = [...Array(7)].map(
    (_, i) => days[(baseDate.getDay() - i + 7) % 7]
  );
  const inChart = props.rankData.map((li) => (li.rank > 0 ? true : false));

  const CalendarObject = dayOfWeek.map((_, index) => ({
    dayOfWeek: dayOfWeek[index],
    date: date[index],
    inChart: inChart[index],
  }));

  return (
    <Container>
      <Title>키워드</Title>
      <DateLabel>
        {baseDate.getFullYear()}년 {baseDate.getMonth()+1}월
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
};

const Container = styled.div`
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const DateLabel = styled.div`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  color: #005096;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const DayList = styled.div<{ $inChart: boolean }>`
  width: 40px;
  height: 70px;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  border-radius: 40px;
  padding: 20px 10px;
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
