import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../../store/store";

import { Rnd } from "react-rnd";

import UserActivityDaily from "../../../googleanalytics/UserActivityDaily";
import UserActivityWeekly from "../../../googleanalytics/UserActivityWeekly";
import UserActivityMonthly from "../../../googleanalytics/UserActivityMonthly";
import { useSelector, useDispatch } from "react-redux";

const UserCustomizePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [title, setTitle] = useState("Customize Page");
  const [tempTitle, setTempTitle] = useState("Customize Page");

  const completeList = useSelector(
    (state: RootState) => state.customize.completeList
  );
  const componentList = useSelector(
    (state: RootState) => state.customize.componentList
  );

  useEffect(() => {
    // setComponentList(emptyListData);
    console.log("componentList", componentList);
  }, []);

  const showEditPage = () => {
    navigate("/main/custom");
  };

  // 각 componentName에 대응하는 컴포넌트를 정의합니다.
  const componentMap: { [key: string]: JSX.Element } = {
    UserActivityDaily: <UserActivityDaily />,
    UserActivityWeekly: <UserActivityWeekly />,
    UserActivityMonthly: <UserActivityMonthly />,
    // 필요한 만큼 componentName에 대응하는 컴포넌트를 추가합니다.
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

  return (
    <Container>
      <TitleContainer>
        <Title> {title} </Title>

        {componentList.length === 0 ? null : (
          <BtnBox>
            <button onClick={showEditPage}>편집</button>
          </BtnBox>
        )}
      </TitleContainer>
      <ContentContainer>
        {componentList.length === 0 ? (
          <>
            <div>
              <img src="https://via.placeholder.com/150" alt="placeholder" />
            </div>
            <AddDataContainer>
              <h1>데이터를 추가해주세요</h1>
              <AddComponentButton onClick={showEditPage}>+</AddComponentButton>
            </AddDataContainer>
          </>
        ) : (
          <>
            {componentList.map((item, index) => (
              <Rnd
                key={item.componentName}
                size={{ width: item.size.width, height: item.size.height }}
                position={{ x: item.position.x, y: item.position.y }}
                disableDragging={true}
                enableResizing={{
                  bottom: false,
                  bottomLeft: false,
                  bottomRight: false,
                  left: false,
                  right: false,
                  top: false,
                  topLeft: false,
                  topRight: false,
                }}
              >
                <Box
                  onClick={() => {
                    console.log(item);
                    console.log(item.componentName);
                    console.log(componentMap[item.componentName]);
                    console.log(componentMap);
                  }}
                >
                  {componentMap[item.componentName]}
                </Box>
              </Rnd>
            ))}
          </>
        )}
      </ContentContainer>
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

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 2;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  border: 1px solid #000;
`;

const AddDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddComponentButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
`;

const Box = styled.div`
  border: 1px solid #000;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export default UserCustomizePage;
