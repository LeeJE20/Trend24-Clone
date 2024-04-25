import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const DummyItems = ["컴포넌트 1", "컴포넌트 2", "컴포넌트 3", "컴포넌트 4"];

const UserCustomizePage = () => {
  const [listItems, setListItems] = useState(new Array(36).fill("Item"));
  const draggingItemIndex = useRef(null);
  const draggingOverItemIndex = useRef(null);

  const [showList, setShowList] = useState(false);

  const showComponentLists = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    const copyListItems = [...listItems];
    DummyItems.forEach((item, index) => {
      copyListItems[index] = item;
    });
    setListItems(copyListItems);
  }, []);

  const onDragStart = (e, index) => {
    draggingItemIndex.current = index;
    e.target.classList.add("grabbing");
  };

  const onDragEnter = (e, index) => {
    draggingOverItemIndex.current = index;
    const copyListItems = [...listItems];
    const dragItemContent = copyListItems[draggingItemIndex.current];
    if (listItems[index] === copyListItems[draggingItemIndex.current]) return;
    copyListItems.splice(draggingItemIndex.current, 1);
    copyListItems.splice(draggingOverItemIndex.current, 0, dragItemContent);
    draggingItemIndex.current = draggingOverItemIndex.current;
    draggingOverItemIndex.current = null;
    setListItems(copyListItems);
  };

  const onDragEnd = (e) => {
    e.target.classList.remove("grabbing");
  };

  return (
    <PageContainer>
      <EditContainer>
        <h1>커스텀페이지</h1>
        <div></div>
        <button onClick={showComponentLists}>추가</button>
        <button>저장</button>
        <button>취소</button>
        <button>초기화</button>
        <button>완료</button>
      </EditContainer>
      <ListContainer>
        {listItems.map((item, index) => (
          <ListItem
            key={index}
            draggable
            onDragStart={(e) => onDragStart(e, index)}
            onDragEnter={(e) => onDragEnter(e, index)}
            onDragEnd={onDragEnd}
          >
            {item}
          </ListItem>
        ))}
      </ListContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #ababab;
`;

const EditContainer = styled.div`
  display: flex;
  flex: 0 0 10%;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  div {
    flex-grow: 1;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex: 0 0 90%;
  /* flex-direction: column; */
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  background-color: #ffffff;
  padding: 10px;
  box-sizing: border-box;
`;

const ListItem = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  margin-bottom: 5px;
  cursor: grab;

  &:hover {
    background-color: #e0e0e0;
  }

  &.grabbing {
    cursor: grabbing;
  }
`;

export default UserCustomizePage;
