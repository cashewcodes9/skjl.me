import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { SidebarLink } from "frontpage/Sidebar/SidebarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to="/">
              SKJLme
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks>
                  <SidebarLink
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    style={{ fontSize: 20 }}
                  >
                    About
                  </SidebarLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <SidebarLink
                    to="anonymous"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    style={{ fontSize: 20 }}
                  >
                    Anonymous
                  </SidebarLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <SidebarLink
                    to="freeCalendar"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    style={{ fontSize: 20 }}
                  >
                    Free
                  </SidebarLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <SidebarLink
                    to="integrateable"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    style={{ fontSize: 20 }}
                  >
                    Integrateable
                  </SidebarLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <SidebarLink
                    to="opensource"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    style={{ fontSize: 20 }}
                  >
                    Opensource
                  </SidebarLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <SidebarLink
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    style={{ fontSize: 20 }}
                  >
                    Services
                  </SidebarLink>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>
                  <SidebarLink
                    to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    style={{ fontSize: 20 }}
                  >
                    Sign Up
                  </SidebarLink>
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/admin/dashboard">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.bool,
};

export default Navbar;
