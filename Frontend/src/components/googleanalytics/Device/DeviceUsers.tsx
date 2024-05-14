import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import styled from "styled-components";

import DeviceUsersGraph from "./DeviceUsersGraph";
import DesktopUsersGraph from "./DesktopUsersGraph";
import MobileUsersGraph from "./MobileUsersGraph";
import TabletUsersGraph from "./TabletUsersGraph";

interface DeviceUsersProps {
  deviceCategory: string;
  activeUsers: string;
  totalUsers: string;
  newUsers: string;
}

const DeviceUsers = () => {
  const [totalDeviceUsers, setTotalDeviceUsers] = useState<DeviceUsersProps[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const reportData = useSelector((state: RootState) => state.ga.deviceReport);

  useEffect(() => {
    setTotalDeviceUsers(
      reportData.map((data) => ({
        deviceCategory: data.dimensionValues[0].value,
        activeUsers: data.metricValues[0].value,
        totalUsers: data.metricValues[1].value,
        newUsers: data.metricValues[2].value,
      }))
    );
  }, [reportData]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Container>
      <Title>
        기기별 사용자 수
        <select onChange={handleCategoryChange}>
          <option value="전체">전체</option>
          <option value="desktop">데스크톱</option>
          <option value="mobile">모바일</option>
          <option value="tablet">태블릿</option>
        </select>
      </Title>
      <Content>
        {selectedCategory === "전체" && (
          <DeviceUsersGraph data={totalDeviceUsers} />
        )}
        {selectedCategory === "desktop" && (
          <DesktopUsersGraph
            data={totalDeviceUsers.filter(
              (data) => data.deviceCategory === "desktop"
            )}
          />
        )}
        {selectedCategory === "mobile" && (
          <MobileUsersGraph
            data={totalDeviceUsers.filter(
              (data) => data.deviceCategory === "mobile"
            )}
          />
        )}
        {selectedCategory === "tablet" && (
          <TabletUsersGraph
            data={totalDeviceUsers.filter(
              (data) => data.deviceCategory === "tablet"
            )}
          />
        )}
      </Content>
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
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  height: 10%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`;

export default DeviceUsers;
