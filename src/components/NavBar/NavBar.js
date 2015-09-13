import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, CollapsibleNav, MenuItem } from 'react-bootstrap';

export default class NavBar extends React.Component {

  render() {
    return (
      <Navbar brand='Your Statement' toggleNavKey={0}>
        <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
          <Nav navbar>
            <NavItem eventKey={1} href='http://www.markwylde.co.uk'>Home</NavItem>
            <NavItem eventKey={1} href='https://github.com/markwylde/react-demo'>Github</NavItem>
            <NavDropdown eventKey={3} id='collapsible-nav-dropdown' title='Statements'>
              <MenuItem eventKey='1'>January</MenuItem>
            </NavDropdown>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }

}

NavBar.displayName = 'Nav Bar';
