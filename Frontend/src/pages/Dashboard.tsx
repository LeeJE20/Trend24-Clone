import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Main = styled.main<{ $sidebarOpen: boolean }>`
  background-color: #d5d5d5;
  padding: 30px;
  height: 100vh;
  width: 100%;
  transition: padding 0.5s ease;
  box-sizing: border-box;
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
