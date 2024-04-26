import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineFund, AiOutlineBook } from "react-icons/ai";
import { gsap } from "gsap";
import Toggle from "../Button/SidebarToggleBtn";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  padding: 15px;
  width: 300px;
  background-color: white;
  color: #121753;
  box-shadow: 1px 0px 5px 1px #67676755;
  box-sizing: border-box;
`;

const Logo = styled.div`
  display: flex;
  margin-bottom: 50%;
  box-sizing: border-box;
  align-items: center;
  img {
    width: 50px;
  }
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 110px;
  right: -20px;
  background-color: #e0e0e0;
  width: 40px;
  height: 40px;
  border-radius: 2rem;
  padding: 5px;
  z-index: 1;
  text-align: center;
  align-content: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10vh;
  height: 40px;
  img {
    width: 30px;
  }
`;
const ProfileInfo = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 50px;
  margin-left: 15px;
  justify-content: center;
`;

const ContentContainer = styled.div``;

const SideLinkContainer = styled.div`
  margin: 50px 0;
  display: flex;
  align-items: center;
  color: #949494;
  :hover {
    color: #b8b8b8;
  }
`;

const SideLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: ${(props) => (props.$isActive ? "" : "inherit")};
  font-size: 16px;
`;

const SideLinkIcon = styled.div`
  display: flex;
  margin-right: 10px;
  font-size: 30px;
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
  const location = useLocation();
  const sidebarRef = useRef(null);
  const closeButtonRef = useRef(null);
  const profileTextRef = useRef(null);
  const sideLinkLabelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();
    const list = [profileTextRef.current, ...sideLinkLabelRefs.current];
    if (sidebarOpen) {
      tl.to(sidebarRef.current, { width: "300px", ease: "ease" })
        .set(list, { display: "block" })
        .to(list, { opacity: 1 });
    } else {
      tl.to(list, { opacity: 0, duration: 0.01 })
        .set(list, { display: "none" })
        .to(sidebarRef.current, { width: "90px", ease: "ease" });
    }
  }, [sidebarOpen]);

  return (
    <SidebarContainer ref={sidebarRef}>
      <Logo>
        <img src="/Image/Logo/Logo.png" />
      </Logo>
      <CloseButtonContainer
        ref={closeButtonRef}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Toggle />
      </CloseButtonContainer>
      <ProfileContainer>
        <img src="/Image/Logo/Logo.png"></img>
        <ProfileInfo ref={profileTextRef}>
          <div>UserName</div>
          <div>YES24 중고서점 목동점</div>
        </ProfileInfo>
      </ProfileContainer>

      <ContentContainer>
        {linksArray.map(({ icon, label, to }, index) => (
          <SideLinkContainer key={label}>
            <SideLink to={to} $isActive={location.pathname == to}>
              <SideLinkIcon>{icon}</SideLinkIcon>
              <SideLinkLabel
                ref={(ref) => (sideLinkLabelRefs.current[index] = ref)}
              >
                {label}
              </SideLinkLabel>
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
    icon: <AiOutlineHome />,
    to: "/main",
  },
  {
    label: "Trending Keywords",
    icon: <AiOutlineFund />,
    to: "/main/UserPage",
  },
  {
    label: "Daily Key Reads",
    icon: <AiOutlineBook />,
    to: "/main/KeywordPage",
  },
];

export default Sidebar;
