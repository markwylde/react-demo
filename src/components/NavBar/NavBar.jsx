import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavBar extends React.Component {

  render() {
    return (
      <Navbar brand='My Statements'>
        <Nav>
          <NavItem eventKey={1} href='http://www.markwylde.co.uk'>Home</NavItem>
          <NavDropdown eventKey={3} title='Statements' id='basic-nav-dropdown'>
            <MenuItem eventKey='1'>January</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }

}
