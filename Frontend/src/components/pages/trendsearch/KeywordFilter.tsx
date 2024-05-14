import { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../../../constants/Color";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import moment from "moment";

interface TrendCategoryDataType {
  trendCategoryId: number;
  name: string;
  keywords: keywords[];
}
interface keywords {
  keywordId: number;
  name: string;
}

interface KeywordFilterProps {
  selectedKeyword: keywords[];
  trendCategoryData: TrendCategoryDataType[];
  onKeywordChange: (keywords: keywords[]) => void;
  onTrendDateChange: (date: string) => void;
}

const KeywordFilter = ({
  selectedKeyword,
  trendCategoryData,
  onKeywordChange,
  onTrendDateChange,
}: KeywordFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [date, setDate] = useState<Date | any>(new Date());
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const categoryClick = (category: number) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    onTrendDateChange(moment(date).format("YYYY-MM-DD"));
  }, [date]);

  const keywordClick = (keyword: keywords) => {
    if (selectedKeyword.includes(keyword)) {
      onKeywordChange(selectedKeyword.filter((kw) => kw !== keyword));
    } else {
      onKeywordChange([...selectedKeyword, keyword]);
    }
  };

  const resetKeyword = () => {
    onKeywordChange([]);
  };

  const dateChange = (date: Date | any) => {
    setDate(date);
    setShowCalendar(false);
  };

  return (
    <Container>
      <SelectedKeyword>
        <div className="label">선택된 키워드</div>
        <div className="keywordList">
          {selectedKeyword &&
            selectedKeyword.map((li, idx) => <div key={idx}># {li.name}</div>)}
        </div>
        <div className="calendar">
          <div>{moment(date).format("YYYY년 MM월 DD일")}</div>
          <FaRegCalendarAlt
            className="icon"
            onClick={() => setShowCalendar(!showCalendar)}
          />
          {showCalendar && (
            <StyledCalendarWrapper>
              <Calendar
                onChange={dateChange}
                value={date}
                formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
                formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
                formatMonthYear={(locale, date) =>
                  moment(date).format("YYYY. MM")
                } // 네비게이션에서 2023. 12 이렇게 보이도록 설정
                calendarType="gregory" // 일요일 부터 시작
                showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
                next2Label={null} // +1년 & +10년 이동 버튼 숨기기
                prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
                minDetail="year" // 10년단위 년도 숨기기
              />
            </StyledCalendarWrapper>
          )}
        </div>
        <div className="searchBtn" onClick={resetKeyword}>
          <div>초기화</div>
          <FaArrowRotateLeft />
        </div>
      </SelectedKeyword>
      <Category>
        <div className="label">카테고리</div>
        <div className="categoryList">
          {trendCategoryData.map((li, idx) => (
            <div
              key={idx}
              onClick={() => categoryClick(li.trendCategoryId)}
              className={selectedCategory === li.trendCategoryId ? "selected" : ""}
            >
              {li.name}
            </div>
          ))}
        </div>
      </Category>
      <KeywordList>
        {selectedCategory &&
          trendCategoryData
            .find((data) => data.trendCategoryId === selectedCategory)
            ?.keywords.map((li, idx) => (
              <KeywordItem
                key={idx}
                onClick={() => keywordClick(li)}
                selected={selectedKeyword.includes(li)}
              >
                # {li.name}
              </KeywordItem>
            ))}
      </KeywordList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: column;
  font-size: 1.5rem;
  padding: 5px;
`;

const SelectedKeyword = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-items: center;
  .label {
    min-width: 200px;
    color: ${Colors.main};
    font-weight: bold;
    font-size: 2rem;
    align-content: center;
    text-align: center;
    border-right: solid 2px #bebebe7e;
    margin: 5px 0px;
  }

  .keywordList {
    flex: 1 0 auto;
    width: 50%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    div {
      margin: 0px 5px;
      padding: 10px 15px;
      border-radius: 30px;

      &:hover {
        background-color: #dadada;
      }
    }
  }

  .searchBtn {
    padding: 3px;
    font-size: 2rem;
    margin-right: 20px;
    margin-top: 5px;
    padding: 8px 15px;
    display: flex;
    align-items: center;
    align-self: center;
    cursor: pointer;
    background-color: ${Colors.sub4};
    border-radius: 10px;

    div {
      margin-right: 10px;
    }

    &:hover {
      background-color: #dadada;
    }
  }
  .calendar {
    margin-top: 3px;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 2rem;
    .icon {
      margin: 5px 10px;
      font-size: 2.5rem;
      padding: 8px;
      background-color: ${Colors.sub4};
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        background-color: #dadada;
      }
    }
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  .label {
    min-width: 200px;
    color: ${Colors.main};
    font-weight: bold;
    font-size: 2rem;
    align-content: center;
    text-align: center;
    border-right: solid 2px #bebebe7e;
    margin: 5px 0px;
  }

  .categoryList {
    flex: 1 0 auto;
    align-content: center;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;

    div {
      height: 70%;
      padding: 0px 30px;
      align-content: center;
      border-right: solid 2px #bebebe7e;

      &:hover {
        background-color: ${Colors.sub4};
      }
    }
    .selected {
      background-color: ${Colors.sub4};
    }
  }
`;

const KeywordList = styled.div`
  min-height: 50px;
  flex-grow: 1;
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const KeywordItem = styled.div<{ selected: boolean }>`
  margin: 0px 5px;
  padding: 5px 15px;
  border-radius: 30px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? `${Colors.sub4}` : "initial"};
  color: ${(props) => (props.selected ? "#5c5c5c" : "initial")};

  &:hover {
    background-color: ${Colors.sub4};
  }
`;

const StyledCalendarWrapper = styled.div`
  position: absolute;
  top: 45px;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1;

  .react-calendar {
    border: none;
    border-radius: 1rem;
    box-shadow: 4px 2px 10px 0px rgba(0, 0, 0, 0.13);
    padding: 3% 5%;
    background-color: white;
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 1.5rem;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 800;
  }

  /* 일요일에만 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: ${(props) => props.theme.red_1};
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: none;
    abbr {
      color: ${Colors.sub1};
    }
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    border-radius: 1rem;
    padding: 0;
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    margin-block-end: 10px;
    padding: 20px 6.6667px;
    font-weight: 600;
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${Colors.sub4};
    border-radius: 0.3rem;
  }
`;

export default KeywordFilter;
