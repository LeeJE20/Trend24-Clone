import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { GeneralRecommendDummyData } from "../constants/DummyData/GeneralRecommendDummy";
import { GeneralRecommendDummy } from "../constants/DummyData/GeneralRecommendDummy";

const GeneralRecommend = () => {
  const [trendList, setTrendList] = useState<GeneralRecommendDummy[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    setTrendList(GeneralRecommendDummyData);
  }, []);

  const gotoRecommendPage = (title: string) => {
    navigate(`/event/general/recommend`, { state: { title } });
  };

  return (
    <Container>
      {trendList.map((trend, index) => (
        <Ball
          key={index}
          $index={index}
          $total={trendList.length}
          onClick={() => {
            gotoRecommendPage(trend.title);
          }}
        >
          {trend.title}
        </Ball>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #ebf4fc;
`;

const Ball = styled.div<{ $index: number; $total: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 100px;
  height: 100px;
  position: absolute; /* Ball 컴포넌트를 부모 컨테이너를 기준으로 배치 */
  top: ${({ $index, $total }) =>
    `calc(50% - 50px + 200px * cos(${
      ($index / $total) * 2 * Math.PI
    }));`}; /* 수평 위치 계산 */
  left: ${({ $index, $total }) =>
    `calc(50% - 50px + 200px * sin(${
      ($index / $total) * 2 * Math.PI
    }));`}; /* 수직 위치 계산 */
`;

export default GeneralRecommend;
