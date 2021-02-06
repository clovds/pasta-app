import React from "react";
import { Link } from "react-router-dom";
import { Bars, Nav, NavIcon, NavIcon2, NavLink } from "./NavbarElements";

const Navbar = ({ toggle, toggleLogin }) => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Pasta</NavLink>
        <NavIcon2 onClick={toggleLogin}>
          <p>Login</p>
        </NavIcon2>
        <Link to="/menu">
          <NavIcon>
            <p>Menu</p>
            <Bars />
          </NavIcon>
        </Link>
      </Nav>
    </div>
  );
};

export default Navbar;
