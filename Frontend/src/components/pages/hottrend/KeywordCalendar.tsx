import styled from "styled-components";

const KeywordCalendar = () => {
  const now = new Date();
  const todayWeek = now.getDay();
  const today = now.getDate();
  const lastday = new Date(now.getFullYear(), now.getMonth(), 0).getDate();

  const getAllDate = (today: number, lastday: number) => {
    let dates = [];

    dates[6] = today;
    for (let i = 5; i >= 0; i--) {
      today--;
      if (today <= 0) {
        today = lastday;
        dates[i] = today;
      } else {
        dates[i] = today;
      }
    }

    return dates;
  };

  const getAllWeek = (todayWeek: number) => {
    let strWeek = ["일", "월", "화", "수", "목", "금", "토"];
    let weekList = [];

    weekList[6] = strWeek[todayWeek];

    for (let i = 5; i >= 0; i--) {
      todayWeek--;
      if (todayWeek < 0) {
        todayWeek = 6;
        weekList[i] = strWeek[todayWeek];
      } else {
        weekList[i] = strWeek[todayWeek];
      }
    }
    console.log(weekList);

    return weekList;
  };

  const getCurrentYear = () => {
    return now.getFullYear();
  };

  const getCurrentMonth = () => {
    return now.getMonth() + 1;
  };

  const CalendarDay = getAllDate(today, lastday);
  const CalendarWeek = getAllWeek(todayWeek);
  const currentYear = getCurrentYear();
  const currentMonth = getCurrentMonth();

  const CalendarObject = [
    { week: CalendarWeek[0], day: CalendarDay[0] },
    { week: CalendarWeek[1], day: CalendarDay[1] },
    { week: CalendarWeek[2], day: CalendarDay[2] },
    { week: CalendarWeek[3], day: CalendarDay[3] },
    { week: CalendarWeek[4], day: CalendarDay[4] },
    { week: CalendarWeek[5], day: CalendarDay[5] },
    { week: CalendarWeek[6], day: CalendarDay[6] },
  ];

  return (
    <Container>
      <Title>키워드</Title>
      <DateLabel>
        {currentYear}년 {currentMonth}월
      </DateLabel>
      <CalendarWrapper>
        {CalendarObject.map((calendar, index) => (
          <DayList key={index}>
            <div className="day">{calendar.week}</div>
            <div className="date">{calendar.day}</div>
            <div></div>
          </DayList>
        ))}
      </CalendarWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const DateLabel = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  color: #005096;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  box-sizing: border-box;
`;

const DayList = styled.div`
  width: 40px;
  height: 70px;
  text-align: center;
  cursor: pointer;
  border-radius: 40px;
  padding: 20px 10px;

  &:hover {
    background: #224861;
    color: white;

    .day {
      color: white;
    }
  }

  &:nth-child(7) {
    border: 0.04em solid rgb(12, 86, 129);
  }

  .day {
    font-size: 0.8em;
    align-items: center;
    justify-content: center;
    color: black;
    text-align: center;
    margin-bottom: 20px;
  }

  .date {
    font-weight: bold;
  }
`;

export default KeywordCalendar;