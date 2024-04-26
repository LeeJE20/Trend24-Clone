import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import CustomComponentList from "../components/Modal/CustomComponentList";
import Item from "../components/Customize/Item";
import { RootState } from "../store/store";

const DummyItems = ["컴포넌트 1", "컴포넌트 2", "컴포넌트 3", "컴포넌트 4"];

const initialListItems = Array.from({ length: 36 }, (_, index) => {
  const row = Math.floor(index / 6) + 1; // 행 번호 계산 (1 ~ 6)
  const col = (index % 6) + 1; // 열 번호 계산 (1 ~ 6)
  return `Item L${col} R${col + 1} T${row} B${row + 1}`; // 아이템 문자열 생성
});

const UserCustomizePage = () => {
  const draggingItemIndex = useRef(null);
  const draggingOverItemIndex = useRef(null);

  const [showList, setShowList] = useState(false);
  const [listItems, setListItems] = useState(new Array(36).fill("⬜"));

  const dispatch = useDispatch();

  const coordinate = useSelector<RootState>(
    (state) => state.customize.coordinate
  );

  const showComponentLists = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    const copyListItems = [...listItems];
    DummyItems.forEach((item, index) => {
      copyListItems[index] = item;
    });
    setListItems(copyListItems);
    console.log("listItems", listItems);
  }, []);

  const onDragStart = (e, index) => {
    draggingItemIndex.current = index;
    e.target.classList.add("grabbing");
    console.log("draggingItemIndex", draggingItemIndex.current);
  };

  const onDragEnter = (e, index) => {
    draggingOverItemIndex.current = index;
    const copyListItems = [...listItems];
    const dragItemContent = copyListItems[draggingItemIndex.current.index];
    if (listItems[index] === copyListItems[draggingItemIndex.current.index])
      return;
    copyListItems.splice(draggingItemIndex.current.index, 1);
    copyListItems.splice(
      draggingOverItemIndex.current.index,
      0,
      dragItemContent
    );
    draggingItemIndex.current = draggingOverItemIndex.current;
    draggingOverItemIndex.current = null;
    setListItems(copyListItems);
  };

  const onDragEnd = (e) => {
    e.target.classList.remove("grabbing");
  };

  const handleRowSizeChange = (num) => {
    console.log("handleRowSizeChange", num);
  };

  const handleColumnSizeChange = (num) => {
    console.log("handleSizeChange", num);
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
          <Item
            key={index}
            item={item}
            coordinate={{
              index: index,
              L: (index % 6) + 1,
              R: (index % 6) + 2,
              T: Math.floor(index / 6) + 1,
              B: Math.floor(index / 6) + 2,
            }}
            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            onDragEnd={onDragEnd}
            handleRowSizeChange={(num) => {
              handleRowSizeChange(num);
            }}
            handleColumnSizeChange={(num) => {
              handleColumnSizeChange(num);
            }}
          />
        ))}
      </ListContainer>
      {showList && (
        <CustomComponentList items={DummyItems} onClose={showComponentLists} />
      )}
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

export default UserCustomizePage;
