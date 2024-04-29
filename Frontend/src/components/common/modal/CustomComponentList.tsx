import styled from "styled-components";

const DummyItems = ["컴포넌트 1", "컴포넌트 2", "컴포넌트 3", "컴포넌트 4"];

const CustomComponentList = ({ onClose, saveList }) => {
  const items = DummyItems;

  const handleClose = () => {
    onClose();
  };

  const handleSave = (item) => {
    saveList(item);
  };

  return (
    <CustomComponentListContainer>
      {items.map((item, index) => (
        <div key={index} onClick={() => handleSave(item)}>
          {item}
        </div>
      ))}
      <button onClick={handleClose}>닫기</button>
    </CustomComponentListContainer>
  );
};

const CustomComponentListContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  background-color: #41a8c2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export default CustomComponentList;
