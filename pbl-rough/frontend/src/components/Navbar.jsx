import React from "react";
import Nav_Lists from "./Nav_Lists.jsx";
import lists from "../navlists.js";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
function createList(list) {
  return <Nav_Lists ids={list.id} contents={list.content} hrefs={list.href} />;
}

function Navbar_() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar-light bg-blue">
        <Navbar.Brand href="#home">PICT HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {lists.map(createList)}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Navbar_;
