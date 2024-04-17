import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Main = styled.main<{ $sidebarOpen: boolean }>`
  background-color: #eff3fc;
  padding: 30px;
  height: 100vh;
  width: ${(props) =>
    props.$sidebarOpen ? "calc(100% - 300px)" : "calc(100% - 90px)"};
  transition: padding 0.5s ease;
  box-sizing: border-box;
  transition: width 0.5s ease;
`;

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.to(mainRef, {});
  }, [sidebarOpen]);

  return (
    <Container>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Main ref={mainRef} $sidebarOpen={sidebarOpen}>
        <Outlet />
      </Main>
    </Container>
  );
}

export default Dashboard;
