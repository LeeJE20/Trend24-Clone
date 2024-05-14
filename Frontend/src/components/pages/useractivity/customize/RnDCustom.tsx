import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import { Rnd, DraggableData, ResizableDelta } from "react-rnd";

import CityTotalReport from "../../../googleanalytics/City/CityTotalReport";
import CityUsers from "../../../googleanalytics/City/CityUsers";
import DateAU from "../../../googleanalytics/Date/DateAU";
import DateBounceRate from "../../../googleanalytics/Date/DateBounceRate";
import DateTotalReport from "../../../googleanalytics/Date/DateTotalReport";
import DateUsers from "../../../googleanalytics/Date/DateUsers";
import DateView from "../../../googleanalytics/Date/DateView";
import DeviceAU from "../../../googleanalytics/Device/DeviceAU";
import DeviceTotalReport from "../../../googleanalytics/Device/DeviceTotalReport";
import DeviceUsers from "../../../googleanalytics/Device/DeviceUsers";
import Memo from "./Memo";

import { api } from "../../../../apis/apiConfig";

import {
  useCustomizeTitle,
  useCustomizedPageAPI,
  useInitialPageAPI,
  useGetCustomizeTitle,
} from "./CustomizePageAPI";

import {
  setPageTitle,
  setCustomizedComponentList,
  setInitialComponentList,
} from "../../../../store/slices/customPageSlice";

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
  const dispatch = useDispatch<AppDispatch>();
  // API 호출을 트리거하는 상태
  const [triggerAPI, setTriggerAPI] = useState(false);

  const [title, setTitle] = useState("");
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState("");

  //API 호출
  //API 호출 결과를 통해 title, customedComponentList를 업데이트
  useGetCustomizeTitle();
  useInitialPageAPI();

  //API 호출 결과를 통해 title, customedComponentList를 업데이트
  const pageTitle = useSelector(
    (state: RootState) => state.customPage.pageTitle
  );
  //API 호출 결과를 통해 title, customedComponentList를 업데이트
  const customedComponentList = useSelector(
    (state: RootState) => state.customPage.customizedComponentList
  );

  useEffect(() => {
    setAddedList([...customedComponentList]);
  }, [customedComponentList]);

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle]);

  useEffect(() => {
    if (triggerAPI) {
      const fetchData = async () => {
        try {
          const response = await api.patch("/custom/page", {
            name: title,
          });
          console.log(response.data.result);
          dispatch(setPageTitle(response.data.result.name));
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();

      const fetchData2 = async () => {
        try {
          const response = await api.patch("/custom/components", {
            customContents: JSON.stringify(addedList),
          });
          dispatch(
            setInitialComponentList(response.data.result.customContents)
          );
          console.log(response.data.result);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData2();

      // 네비게이션 이동
      navigate("/main/customizePage");

      // API 호출 상태를 초기화
      setTriggerAPI(false);
    }
  }, [triggerAPI, navigate, dispatch]);

  const handleDragStop = (index: number, d: DraggableData) => {
    setAddedList(
      addedList.map((item, i) =>
        i === index ? { ...item, position: { x: d.x, y: d.y } } : item
      )
    );
  };

  // 각 componentName에 대응하는 컴포넌트를 정의합니다.
  const componentMap: { [key: string]: JSX.Element } = {
    CityTotalReport: <CityTotalReport />,
    CityUsers: <CityUsers />,
    DateAU: <DateAU />,
    DateBounceRate: <DateBounceRate />,
    DateTotalReport: <DateTotalReport />,
    DateUsers: <DateUsers />,
    DateView: <DateView />,
    DeviceAU: <DeviceAU />,
    DeviceTotalReport: <DeviceTotalReport />,
    DeviceUsers: <DeviceUsers />,
    Memo: <Memo />,
  };

  const handleResizeStop = (
    index: number,
    direction: string,
    ref: HTMLElement,
    delta: ResizableDelta,
    position: { x: number; y: number }
  ) => {
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
    navigate("/main/customizePage");
  };

  const compleCustomize = () => {
    dispatch(setInitialComponentList(addedList));
    dispatch(setCustomizedComponentList(addedList));

    setTriggerAPI(true);
  };

  const makeTempList = (item: CustomizedComponentList) => {
    setAddedList([...addedList, item]);
  };

  const sendTitleEdit = (newTitle: string) => {
    setTitle(newTitle);
    setTempTitle(newTitle);
    setIsTitleEditing(false);
  };

  const handleCancelTitleEdit = () => {
    setTitle(tempTitle);
    setIsTitleEditing(false);
  };

  const showEditTitle = () => {
    setIsTitleEditing(true);
    setTitle("");
  };

  const handlleDeleteComponent = (name: string) => {
    setAddedList(addedList.filter((item) => item.componentName !== name));
  };

  return (
    <Container>
      <TitleContainer>
        {isTitleEditing ? (
          <>
            <Title>
              <input
                type="text"
                placeholder={`${tempTitle}`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <button
                onClick={() => {
                  sendTitleEdit(title);
                }}
              >
                확인
              </button>
              <button onClick={handleCancelTitleEdit}>취소</button>
            </Title>
          </>
        ) : (
          <>
            <Title>
              {title}
              <button onClick={showEditTitle}>제목 편집</button>
            </Title>
          </>
        )}
        <BtnBox>
          <AddBtn>
            <button onClick={toggleModal}>추가</button>
          </AddBtn>
          <CancelBtn>
            <button onClick={cancelChange}>취소</button>
          </CancelBtn>
          <CompleteBtn>
            <button onClick={compleCustomize}>완료</button>
          </CompleteBtn>
        </BtnBox>
      </TitleContainer>

      <DragContainer>
        {addedList.map((item, index) => (
          <Rnd
            key={index}
            size={{ width: item.size.width, height: item.size.height }}
            position={{ x: item.position.x, y: item.position.y }}
            onDragStop={(e, d) => handleDragStop(index, d)}
            onResizeStop={(e, direction, ref, delta, position) =>
              handleResizeStop(index, direction, ref, delta, position)
            }
            resizeGrid={[20, 20]}
            dragGrid={[20, 20]}
            bounds={"parent"}
            minWidth={"20%"}
            minHeight={"20%"}
            maxHeight={"500%"}
            maxWidth={"500%"}
          >
            <Item>
              <button
                onClick={() => {
                  handlleDeleteComponent(item.componentName);
                }}
              >
                삭제
              </button>
              {componentMap[item.componentName]}
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
`;

const Title = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-start;
`;

const BtnBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const AddBtn = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const CancelBtn = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const CompleteBtn = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
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
  box-sizing: border-box;
  background-color: #ffffff;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
`;

export default RnDCustom;
