import '../test/unit-test-support/setup-test-dom';
import { expect } from 'chai';
import rewire from 'rewire';
import React from 'react/addons';

describe('App', function() {

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';
    setTimeout(done);
  });

  it('should display App if bill is defined', function() {
    rewire('./App');

    let navbar = document.querySelectorAll('.navbar');
    expect(navbar.length).to.be.greaterThan(0);
  });

});
