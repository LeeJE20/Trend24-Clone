import styled from "styled-components";
import { questionType } from "../../../store/slices/recommendSlice";
import { FaQuoteLeft } from "react-icons/fa6";

interface cardType {
  cardData: questionType;
  cardClick: (card: questionType) => void;
}

const QuestionCard = ({ cardData, cardClick }: cardType) => {  
  return (
    <Box className="card" onClick={() => cardClick(cardData)}>
      <div className="quote">
        <FaQuoteLeft />
      </div>
      <div className="content">{cardData.questionText}</div>
      <img className="img" src="/Image/EventPage/glass1.png" />
    </Box>
  );
};

const Box = styled.div`
  width: 300px;
  height: 400px;
  border: solid 1px black;
  padding: 50px 30px;
  background-image: linear-gradient(to bottom right, #9ce4d6, white);
  overflow: hidden;
  font-size: 2.5rem;
  align-items: center;
  justify-content: center;
  align-content: center;
  /* transform: rotate(-10deg); */
  margin: 5%;
  box-sizing: border-box;
  border-radius: 30px;
  opacity: 0.7;
  box-shadow: vinset 0px 0px 10px rgba(0, 0, 0, 0.8); 
  overflow: hidden;
  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  .quote {
    font-size: 4rem;
    margin: 0;
    font-weight: 900;
  }

  .img {
    width: 160%;
    right: -40%;
    bottom: -30%;
    z-index: -10;
    opacity: 0.3;
  }

  &:nth-child(2n) {
    margin-top: 10px;
    background-image: linear-gradient(to bottom right, #e6cbac, white);
  }

  &:nth-child(3n) {
    margin-top: 10%;
  }
`;

export default QuestionCard;
