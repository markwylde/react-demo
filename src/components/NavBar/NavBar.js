import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export const NavBar = () =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav navbar>
      <NavItem eventKey={1} href='http://www.markwylde.co.uk'>Home</NavItem>
      <NavItem eventKey={1} href='https://github.com/markwylde/react-demo'>Github</NavItem>
      <NavDropdown eventKey={3} id='collapsible-nav-dropdown' title='Statements'>
        <MenuItem eventKey='1'>January</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>;

NavBar.displayName = 'Nav Bar';

export default NavBar;
