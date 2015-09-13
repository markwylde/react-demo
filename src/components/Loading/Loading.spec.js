import '../../../test/unit-test-support/setup-test-dom';
import { expect } from 'chai';

import React from 'react/addons';
import Loading from './Loading';

describe('Component:Loading', function() {

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';
    setTimeout(done);
  });

  it('should render a loading spinner', function() {
    React.render(<Loading />, document.body);

    let loadingElement = document.querySelectorAll('.loading .fa-spinner');
    expect(loadingElement.length).to.equal(1);

  });

});