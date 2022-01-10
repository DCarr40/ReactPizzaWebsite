import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./NavbarStyledComponents";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  );
};

export default Navbar;
