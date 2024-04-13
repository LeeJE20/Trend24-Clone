import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/react.svg";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";

const SidebarContainer = styled.div<{ sidebarOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 2rem;
  width: ${(props) => (props.sidebarOpen ? "15rem" : "3rem")};
  height: 100vh;
  background-color: #e8e8e8;
  transition: width 0.5s ease;

  @keyframes collapseSidebar {
    from {
      width: 15rem;
    }
    to {
      width: 3rem;
    }
  }

  animation: ${(props) =>
    props.sidebarOpen ? "none" : `collapseSidebar 0.5s ease`};
`;

const Logo = styled.div`
  display: flex;
  margin-bottom: 4rem;
  img {
    width: 50px;
    margin-right: 10px;
  }
`;

const CloseButtonContainer = styled.div`
  background-color: #a2a2a2;
  position: absolute;
  right: -20px;
  top: 110px;
  width: 40px;
  height: 40px;
  border-radius: 2rem;
  z-index: 1;

  text-align: center;
  align-content: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5rem;
  img {
    width: 50px;
    margin-right: 20px;
  }
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div``;

const SideLinkContainer = styled.div`
  margin: 50px 0;
  display: flex;
  align-items: center;
  :hover {
    box-shadow: inset 0 0 0 1px #e5e5e5;
  }
`;

const SideLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
`;

const SideLinkIcon = styled.div`
  display: flex;
  margin-right: 10px;
  font-size: 30px;
  border: solid 1px black;
`;

const SideLinkLabel = styled.span`
  display: block;
  flex: 1;
  font-size: 15px;
`;

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <SidebarContainer sidebarOpen={sidebarOpen}>
      <Logo>
        <img src={logoImg} />
        {sidebarOpen ? <h2>프로젝트이름</h2> : ""}
      </Logo>
      <CloseButtonContainer onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? "X" : "-"}
      </CloseButtonContainer>
      <ProfileContainer>
        <img src={logoImg}></img>
        {sidebarOpen && (
          <ProfileInfo>
            <div>UserName</div>
            <div>YES24 중고서점 목동점</div>
          </ProfileInfo>
        )}
      </ProfileContainer>

      <ContentContainer>
        {linksArray.map(({ icon, label, to }) => (
          <SideLinkContainer key={label}>
            <SideLink to={to}>
              <SideLinkIcon>{icon}</SideLinkIcon>
              {sidebarOpen && <SideLinkLabel>{label}</SideLinkLabel>}
            </SideLink>
          </SideLinkContainer>
        ))}
      </ContentContainer>
    </SidebarContainer>
  );
}

const linksArray = [
  {
    label: "Dashboard",
    icon: <RxDashboard />,
    to: "/main/page1",
  },
  {
    label: "Trending Keywords",
    icon: <RxDashboard />,
    to: "/main/page2",
  },
  {
    label: "Daily Key Reads",
    icon: <RxDashboard />,
    to: "/main/page3",
  },
];

export default Sidebar;
