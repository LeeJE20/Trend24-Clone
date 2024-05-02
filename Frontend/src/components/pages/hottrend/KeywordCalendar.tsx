import styled from "styled-components";

const KeywordCalendar = () => {
  const now = new Date();

  return (
    <Container>
      <Title>
        키워드 <br /> <br />
        {now.getFullYear()}년 {now.getMonth() + 1}월
      </Title>
      <CalendarWrapper>
        <div className="day"></div>
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

const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  color: #005096;
  display: flex;
`;

export default KeywordCalendar;