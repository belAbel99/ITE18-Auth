import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { userData } from "../../helpers";

const CustomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { jwt } = userData();
  const isLoggedIn = !!jwt;

  return (
    <div className="custom-nav">
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/home" className="mr-auto" style={{fontSize: "2rem", fontWeight: "bold", color: "purple"}}>
      Welcome to my lessons in life!
    </NavbarBrand>
    <NavbarToggler onClick={toggle} className="mr-2" />
    <Collapse isOpen={isOpen} navbar>
      <Nav navbar>
        {isLoggedIn ? (
          <NavItem>
            <NavLink href="/logout" style={{color: "purple"}}>Logout</NavLink>
          </NavItem>
        ) : (
          <NavItem>
            <NavLink href="/" style={{color: "purple"}}>Login</NavLink>
          </NavItem>
        )}
      </Nav>
    </Collapse>
  </Navbar>
</div>
  );
};

export default CustomNav;
