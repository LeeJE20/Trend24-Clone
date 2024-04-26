import styled from "styled-components";

const ClickDataChart = () => {
  return (
    <ClickDataChartContainer>
      <div>ClickDataChart</div>
    </ClickDataChartContainer>
  );
};

const ClickDataChartContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 4 / 7;
  grid-row: 1 / 4;
  border: 1px solid #000;
`;

export default ClickDataChart;
