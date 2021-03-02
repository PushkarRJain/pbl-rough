import React from "react";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
function Nav_Lists(props) {
  return (
    <div>
      <Nav.Link href={props.hrefs}>{props.contents}</Nav.Link>
    </div>
  );
}

export default Nav_Lists;
