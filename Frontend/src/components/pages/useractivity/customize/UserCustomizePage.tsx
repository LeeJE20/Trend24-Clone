import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RootState } from "../../../../store/store";

import {
  useCustomizeTitle,
  useCustomizedPageAPI,
  useInitialPageAPI,
  useGetCustomizeTitle,
} from "./CustomizePageAPI";

import { Rnd } from "react-rnd";

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
import { useSelector } from "react-redux";

interface componentListProps {
  componentName: string;
  size: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
}

const UserCustomizePage = () => {
  const navigate = useNavigate();

  //API 호출
  //API 호출 결과를 통해 title, customedComponentList를 업데이트
  useGetCustomizeTitle();
  useInitialPageAPI();

  const pageTitle = useSelector(
    (state: RootState) => state.customPage.pageTitle
  );
  const initialComponentList = useSelector(
    (state: RootState) => state.customPage.initialComponentList
  );

  const showEditPage = () => {
    navigate("/main/custom");
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

  return (
    <Container>
      <TitleContainer>
        <Title> {pageTitle} </Title>

        {initialComponentList.length === 0 ? null : (
          <BtnBox>
            <button onClick={showEditPage}>편집</button>
          </BtnBox>
        )}
      </TitleContainer>
      <ContentContainer>
        {initialComponentList.length === 0 ? (
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
            {initialComponentList.map((item, index) => (
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
                <Box>{componentMap[item.componentName]}</Box>
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
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export default UserCustomizePage;
