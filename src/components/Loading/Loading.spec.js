import '../../../test/unit-test-support/setup-test-dom';
import { expect } from 'chai';

import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';

let element;

describe('Component:Loading', function() {

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    element = document.getElementById('app');
  });

  afterEach(done => {
    ReactDOM.unmountComponentAtNode(element);
    setTimeout(done);
  });

  it('should render a loading spinner', function() {
    ReactDOM.render(<Loading />, element);

    let loadingElement = document.querySelectorAll('.loading .fa-spinner');
    expect(loadingElement.length).to.equal(1);

  });

});
