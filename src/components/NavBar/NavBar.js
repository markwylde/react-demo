import React from 'react';
import { Navbar } from 'react-bootstrap';

export const NavBar = () =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <ul className="nav navbar-nav">
      <li role="presentation">
        <a href="http://www.markwylde.co.uk">Home</a>
      </li>
      <li role="presentation">
        <a href="https://github.com/markwylde/react-demo">Github</a>
      </li>
    </ul>
  </Navbar>;

NavBar.displayName = 'Nav Bar';

export default NavBar;
