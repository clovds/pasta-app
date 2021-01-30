import React from "react";
import { Bars, Nav, NavIcon, NavIcon2, NavLink } from "./NavbarElements";

const Navbar = ({ toggle, toggleLogin }) => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Pasta</NavLink>
        <NavIcon2 onClick={toggleLogin}>
          <p>Login</p>
        </NavIcon2>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  );
};

export default Navbar;
