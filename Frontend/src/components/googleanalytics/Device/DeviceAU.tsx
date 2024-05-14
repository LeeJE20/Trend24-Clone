import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import DeviceAUGraph from "./DeviceAUGraph";
import DesktopAUGraph from "./DesktopAUGraph";
import MobileAUGraph from "./MobileAUGraph";
import TabletAUGraph from "./TabletAUGraph";

interface DeviceAUProps {
  deviceCategory: string;
  dauPerMau: string;
  dauPerWau: string;
  wauPerMau: string;
}

const DeviceAU = () => {
  const [totalDeviceAU, setTotalDeviceAU] = useState<DeviceAUProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const reportData = useSelector((state: RootState) => state.ga.deviceReport);

  useEffect(() => {
    setTotalDeviceAU(
      reportData.map((data) => ({
        deviceCategory: data.dimensionValues[0].value,
        dauPerMau: data.metricValues[3].value,
        dauPerWau: data.metricValues[4].value,
        wauPerMau: data.metricValues[5].value,
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
        기기별 사용자수 비교
        <select onChange={handleCategoryChange}>
          <option value="전체">전체</option>
          <option value="desktop">데스크톱</option>
          <option value="mobile">모바일</option>
          <option value="tablet">태블릿</option>
        </select>
      </Title>
      <Content>
        {selectedCategory === "전체" && <DeviceAUGraph data={totalDeviceAU} />}
        {selectedCategory === "desktop" && (
          <DesktopAUGraph
            data={totalDeviceAU.filter(
              (data) => data.deviceCategory === "desktop"
            )}
          />
        )}
        {selectedCategory === "mobile" && (
          <MobileAUGraph
            data={totalDeviceAU.filter(
              (data) => data.deviceCategory === "mobile"
            )}
          />
        )}
        {selectedCategory === "tablet" && (
          <TabletAUGraph
            data={totalDeviceAU.filter(
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

export default DeviceAU;
