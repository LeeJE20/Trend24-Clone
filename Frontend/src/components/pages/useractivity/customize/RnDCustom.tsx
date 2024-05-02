import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import { setCompleteList } from "../../../../store/slices/customizeSlice";
import { Rnd } from "react-rnd";
import CustomComponentList from "../../../common/modal/CustomComponentList";

interface CustomizedComponentList {
  componentName: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const RnDCustom = () => {
  const [addedList, setAddedList] = useState<CustomizedComponentList[]>([]);
  const [toggleListModal, setToggleListModal] = useState(false);
  const navigate = useNavigate();

  const componentList = useSelector(
    (state: RootState) => state.customize.completeList
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setAddedList([...componentList]);
  }, [componentList]);

  const handleDragStop = (e, d, index) => {
    setAddedList(
      addedList.map((item, i) =>
        i === index ? { ...item, position: { x: d.x, y: d.y } } : item
      )
    );
  };

  const handleResizeStop = (e, direction, ref, delta, position, index) => {
    setAddedList(
      addedList.map((item, i) =>
        i === index
          ? {
              ...item,
              size: { width: ref.offsetWidth, height: ref.offsetHeight },
              position: { x: position.x, y: position.y },
            }
          : item
      )
    );
  };

  const toggleModal = () => {
    setToggleListModal(!toggleListModal);
  };

  const cancelChange = () => {
    navigate("/main/UserCustomizePage");
  };

  const compleCustomize = () => {
    dispatch(setCompleteList(addedList));
    navigate("/main/UserCustomizePage");
  };

  const makeTempList = (item) => {
    setAddedList([...addedList, item]);
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
        {addedList.map((item, index) => (
          <Rnd
            key={index}
            size={{ width: item.size.width, height: item.size.height }}
            position={{ x: item.position.x, y: item.position.y }}
            onDragStop={(e, d) => handleDragStop(e, d, index)}
            onResizeStop={(e, direction, ref, delta, position) =>
              handleResizeStop(e, direction, ref, delta, position, index)
            }
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
        <CustomComponentList
          makeTempList={makeTempList}
          onClose={toggleModal}
        />
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
