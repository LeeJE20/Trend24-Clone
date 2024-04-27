import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/sidebar/Sidebar2";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main<{ $sidebarOpen: boolean }>`
  background-color: #eff3fc;
  padding: 30px;
  height: 100%;
  flex: 1;
  box-sizing: border-box;
`;

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Container>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Main $sidebarOpen={sidebarOpen}>
        <Outlet />
      </Main>
    </Container>
  );
}

export default Dashboard;
