import '../../../test/unit-test-support/setup-test-dom';
import { expect } from 'chai';

import React from 'react/addons';
import NavBar from './NavBar';

describe('Component:NavBar', function() {

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';
    setTimeout(done);
  });

  it('should render a loading spinner', function() {
    React.render(<NavBar />, document.body);

    let loadingElement = document.querySelectorAll('.navbar-nav li');
    expect(loadingElement.length).to.equal(4);

  });

});
