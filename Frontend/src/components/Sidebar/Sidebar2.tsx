import { useRef } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineFund, AiOutlineBook } from "react-icons/ai";
import { BiMenu, BiMenuAltRight, BiLogOut } from "react-icons/bi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const navigate = useNavigate();

  const sidebarRef = useRef(null);
  const profileWrapperRef = useRef(null);
  const logoRef = useRef(null);
  const profileContentRef = useRef(null);
  const sideLinkLabelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const logoutBtnRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const location = useLocation();

  useGSAP(() => {
    const tl = gsap.timeline();
    const list = [
      profileContentRef.current,
      logoRef.current,
      ...sideLinkLabelRefs.current,
    ];
    if (sidebarOpen) {
      tl.to([sidebarRef.current, profileWrapperRef.current], { width: "250px" })
        .set(
          [toggleButtonRef.current, logoutBtnRef.current],
          { textAlign: "right" },
          "<"
        )
        .set(list, { display: "" })
        .to(list, { opacity: 1 });
    } else {
      tl.to([sidebarRef.current, profileWrapperRef.current], { width: "78px" })
        .to(list, { opacity: 0, duration: 0.3 }, "<")
        .set(
          [toggleButtonRef.current, logoutBtnRef.current],
          {
            textAlign: "center",
          },
          "<"
        )
        .set(list, { display: "none" });
    }
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const changePage = (to:string) => {
    navigate(to);
  }

  return (
    <SidebarWrapper ref={sidebarRef}>
      <LogoDetails>
        <Logo ref={logoRef}>
          <img src="/Image/Logo/Logo.png" />
          <div>Trend24</div>
        </Logo>
        <ToggleButton ref={toggleButtonRef} onClick={toggleSidebar}>
          {sidebarOpen ? <BiMenuAltRight /> : <BiMenu />}
        </ToggleButton>
      </LogoDetails>
      <NavList>
        {linksArray.map(({ icon, label, to }, index) => (
          <NavItem key={label} onClick={() => changePage(to)}>
            <LinkWrapper $isActive={location.pathname === to}>
              <i>{icon}</i>
              <span ref={(ref) => (sideLinkLabelRefs.current[index] = ref)}>
                {label}
              </span>
            </LinkWrapper>
            {!sidebarOpen && <Tooltip>{label}</Tooltip>}
          </NavItem>
        ))}
      </NavList>
      <ProfileWrapper ref={profileWrapperRef}>
        <ProfileDetails ref={profileContentRef}>
          <ProfileImage src="/Image/Logo/Logo.png" alt="profileImg" />
          <NameJob>
            <div className="name">UserName</div>
            <div className="job">YES24 중고서점 목동점</div>
          </NameJob>
        </ProfileDetails>
        <LogOutButton ref={logoutBtnRef}>
          <BiLogOut />
        </LogOutButton>
      </ProfileWrapper>
    </SidebarWrapper>
  );
}

export default Sidebar;

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

const SidebarWrapper = styled.div`
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  box-sizing: border-box;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 60px;
    margin-right: 15px;
  }
  div {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
`;

const LogoDetails = styled.div`
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
`;

const ToggleButton = styled.i`
  position: absolute;
  top: 30%;
  right: 0;
  min-width: 50px;
  color: white;
  font-size: 23px;
  text-align: right;
  cursor: pointer;
`;

const NavList = styled.ul`
  margin-top: 20px;
  padding: 0;
`;

const Tooltip = styled.span`
  display: hidden;
  position: absolute;
  top: 10px;
  left: calc(100% + 15px);
  z-index: 3;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-5px);
  transition: all 0.2s ease-in;
`;

const NavItem = styled.li`
  position: relative;
  margin: 20px 0;
  list-style: none;

  &:hover ${Tooltip} {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
`;

const LinkWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  background: ${({ $isActive }) => ($isActive ? "#fff" : "transparent")};
  color: ${({ $isActive }) => ($isActive ? "#11101d" : "#fff")};
  border-radius: 12px;
  padding: 15px;
  

  &:hover {
    background-color: #fff;
    transition: background-color 0.8s ease;
    span,
    i {
      color: #11101d;
    }
  }

  span {
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    margin-left: 10px;
  }

  i {
    font-size: 18px;
  }
`;

const ProfileWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 10px 14px;
  background: #1d1b31;
  height: 70px;
  box-sizing: border-box;
`;

const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

const ProfileImage = styled.img`
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
`;

const NameJob = styled.div`
  .name {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    white-space: nowrap;
  }

  .job {
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
  }
`;

const LogOutButton = styled.i`
  position: absolute;
  top: 30%;
  right: 0;
  min-width: 50px;
  color: white;
  font-size: 23px;
  text-align: right;
  padding-right: 14px;
  cursor: pointer;
`;
