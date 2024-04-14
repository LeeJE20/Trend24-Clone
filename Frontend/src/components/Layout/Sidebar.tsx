import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import logoImg from "../../assets/react.svg";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineFund, AiOutlineBook } from "react-icons/ai";
import { gsap } from "gsap";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 2rem;
  width: 15rem;
  height: 100%;
  background-color: white;
  transition: width 0.5s ease;
  box-shadow: 1px 0px 5px 1px #67676755;
`;

const Logo = styled.div`
  display: flex;
  margin-bottom: 4rem;
  height: 100px;
  align-items: center;
  img {
    width: 30px;
  }
  h2 {
    margin-left: 15px;
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
  margin-bottom: 10vh;
  height: 40px;
  img {
    width: 30px;
  }
`;
const ProfileInfo = styled.div`
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
    color: black;
  }
`;

const SideLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: ${(props) => (props.$isActive ? "black" : "inherit")};
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
  const logoTextRef = useRef(null);
  const sidebarRef = useRef(null);
  const profileTextRef = useRef(null);
  const sideLinkLabelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();
    const list = [
      logoTextRef.current,
      profileTextRef.current,
      ...sideLinkLabelRefs.current,
    ];

    if (sidebarOpen) {
      tl.to(sidebarRef.current, { width: "15rem", duration: 0.01 })
        .to(logoTextRef.current, {})
        .set(list, { display: "block" })
        .to(list, { opacity: 1 });
    } else {
      tl.to(list, { opacity: 0, duration: 0.01 })
        .set(list, { display: "none" })
        .to(sidebarRef.current, { width: "2rem" })
        .totalDuration(0.01);
    }
  }, [sidebarOpen]);

  return (
    <SidebarContainer ref={sidebarRef}>
      <Logo>
        <img src={logoImg} />
        <h2 ref={logoTextRef}>프로젝트이름</h2>
      </Logo>
      <CloseButtonContainer onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? "X" : "-"}
      </CloseButtonContainer>
      <ProfileContainer>
        <img src={logoImg}></img>
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
    to: "/main/page2",
  },
  {
    label: "Daily Key Reads",
    icon: <AiOutlineBook />,
    to: "/main/page3",
  },
];

export default Sidebar;