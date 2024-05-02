import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../../../store/store";

const CustomComponentList = ({ onClose, makeTempList }) => {
  const items = useSelector(
    (state: RootState) => state.customize.componentList
  );

  const handleClose = () => {
    onClose();
  };

  const handleSave = (item) => {
    makeTempList(item);
    onClose();
  };

  return (
    <CustomComponentListContainer>
      {items.map((item, index) => (
        <div key={index} onClick={() => handleSave(item)}>
          {item.componentName}
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
