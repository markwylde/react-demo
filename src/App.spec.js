import '../test/unit-test-support/setup-test-dom';
import { expect } from 'chai';
import React from 'react/addons';

import './App';

describe('App', function() {

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';
    setTimeout(done);
  });

  it('should display App if bill is defined', function() {
    let navbar = document.querySelectorAll('.navbar');
    expect(navbar.length).to.be.greaterThan(0);
  });

});
