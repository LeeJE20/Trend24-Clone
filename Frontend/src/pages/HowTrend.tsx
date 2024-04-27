import styled from "styled-components";

const HowTrend = () => {
  return <HowTrendContainer>HowTrend</HowTrendContainer>;
};

const HowTrendContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export default HowTrend;
