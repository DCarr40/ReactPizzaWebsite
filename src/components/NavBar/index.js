import React from "react";
import { Nav, NavLink } from "./NavbarStyledComponents";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
      </Nav>
    </div>
  );
};

export default Navbar;
