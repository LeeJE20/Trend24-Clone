import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar";
import styled from "styled-components";

const Main = styled.main<{ sidebarOpen: boolean }>`
  padding: 5px ${(props) => (props.sidebarOpen ? "350px" : "150px")}; /* 사이드바가 닫혔을 때 메인 컨텐츠의 패딩을 줄입니다. */
  background-color: #d5d5d5;
  height: 100vh;
  transition: padding 0.5s ease; /* 패딩에 대한 트랜지션 효과 추가 */
`;

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // 사이드바의 상태를 추적하는 useState 훅

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Main sidebarOpen={sidebarOpen}>
        <Outlet />
      </Main>
    </div>
  );
}

export default Dashboard;
