import { useState } from "react";
import styled from "styled-components";
import Modal from "../../common/modal/Modal";

interface PropsType {
  keyword: string[];
  category: string;
}

const CategoryKeyword = (props: PropsType) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <Title>{props.category}</Title>
      <Keyword>
        {props.keyword.map((data, idx) => {
          return <div key={idx}># {data}</div>;
        })}
      </Keyword>
      <KeywordSourceBtn onClick={openModal}>?</KeywordSourceBtn>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>키워드 추출</h2>
        <p>구글 뭐시기</p>
        <p>X 뭐시기</p>
        <p>유튜브 뭐시기</p>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 30px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Keyword = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    font-size: 20px;
    margin-right: 20px;
  }
`;
const KeywordSourceBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: transparent;
  background-color: #091a52;
  color: white;
  cursor: pointer;
`;

export default CategoryKeyword;
