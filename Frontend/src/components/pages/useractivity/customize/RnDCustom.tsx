import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import { setCompleteList } from "../../../../store/slices/customizeSlice";

import { Rnd } from "react-rnd";
import CustomComponentList from "../../../common/modal/CustomComponentList";

import {
  CustomizedComponentList,
  customizedComponentListData,
} from "../../../../constants/DummyData";

const RnDCustom = () => {
  const [savedListItems, setSavedListItems] = useState<
    CustomizedComponentList[]
  >([]);
  const [toggleListModal, setToggleListModal] = useState(false);
  const navigate = useNavigate();

  const componentList = useSelector(
    (state: RootState) => state.customize.completeList
  );
  const dispatch = useDispatch<AppDispatch>();

  const [size, setSize] = useState({ width: 200, height: 200 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStop = (e, d) => {
    setPosition({ x: d.x, y: d.y });
  };

  const handleResizeStop = (e, direction, ref, delta, position) => {
    setSize({
      width: parseInt(ref.style.width),
      height: parseInt(ref.style.height),
    });
    setPosition({ x: position.x, y: position.y });
    console.log(ref);
  };

  const toggleModal = () => {
    setToggleListModal(!toggleListModal);
  };

  const cancelChange = () => {
    setSavedListItems([...componentList]);
  };

  const compleCustomize = () => {
    setSavedListItems([...componentList]);
    dispatch(setCompleteList(savedListItems));
    navigate("/main/UserCustomizePage");
  };

  return (
    <Container>
      <TitleContainer>
        드래그앤드롭 커스텀
        <button onClick={toggleModal}>추가</button> |
        <button onClick={cancelChange}>취소</button> |
        <button onClick={compleCustomize}>완료</button>
      </TitleContainer>
      <DragContainer>
        {savedListItems.map((item, index) => (
          <Rnd
            key={index}
            size={size}
            position={position}
            onDragStop={handleDragStop}
            onResizeStop={handleResizeStop}
            resizeGrid={[20, 20]}
            dragGrid={[20, 20]}
            bounds={"parent"}
            minWidth={"20%"}
            minHeight={"20%"}
            maxHeight={"200%"}
            maxWidth={"200%"}
          >
            <Item>
              {item.componentName}
              {item.position.x}
              {item.position.y}
            </Item>
          </Rnd>
        ))}
      </DragContainer>
      {toggleListModal && (
        <CustomComponentList saveList={saveList} onClose={toggleModal} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  border: 1px solid #000;
`;

const DragContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 100%;
  height: 90%;
  border: 1px solid #000;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
`;

export default RnDCustom;
