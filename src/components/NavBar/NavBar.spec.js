import '../../../test/unit-test-support/setup-test-dom';
import { expect } from 'chai';

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

let element;

describe('Component:NavBar', function() {

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    element = document.getElementById('app');
  });

  afterEach(done => {
    ReactDOM.unmountComponentAtNode(element);
    setTimeout(done);
  });

  it('should render a loading spinner', function() {
    ReactDOM.render(<NavBar />, element);

    let loadingElement = document.querySelectorAll('.navbar-nav li');
    expect(loadingElement.length).to.equal(4);

  });

});
