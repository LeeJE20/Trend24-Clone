import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { emptyListData } from "../../../../constants/DummyData";
import {
  customizedComponentListData,
  CustomizedComponentList,
} from "../../../../constants/DummyData";
import { Rnd } from "react-rnd";

import UserActivityDaily from "../../../googleanalytics/UserActivityDaily";
import UserActivityWeekly from "../../../googleanalytics/UserActivityWeekly";
import UserActivityMonthly from "../../../googleanalytics/UserActivityMonthly";

const UserCustomizePage = () => {
  const navigate = useNavigate();
  const [componentList, setComponentList] = useState<CustomizedComponentList[]>(
    []
  );

  useEffect(() => {
    // setComponentList(emptyListData);
    setComponentList(customizedComponentListData);
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

  return (
    <Container>
      <TitleContainer>
        사용자 커스터마이징
        {componentList.length === 0 ? null : (
          <button onClick={showEditPage}>편집</button>
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
                key={index}
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
                {/* <Box>{item.componentName}</Box> */}
                {componentMap[item.componentName]}
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
`;

export default UserCustomizePage;
