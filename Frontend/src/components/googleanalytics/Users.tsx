import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import runReport from "./runReport";

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const totalUsers = useSelector((state: RootState) => state.ga.totalUsers);
  const activeUsers = useSelector((state: RootState) => state.ga.activeUsers);
  const newUsers = useSelector((state: RootState) => state.ga.newUsers);

  useEffect(() => {
    runReport(dispatch);
  }, [dispatch]);

  return (
    <Container>
      <Title>사용자 수</Title>
      <Content>
        <div>{totalUsers}</div>
        <div>{activeUsers}</div>
        <div>{newUsers}</div>
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
  grid-column: 1 / 3;
  grid-row: 3 / 5;
  background-color: #ffffff;
  border: 1px solid #000;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Users;
