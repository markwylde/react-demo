import '../../../test/unit-test-support/setup-test-dom';
import { expect } from 'chai';

import React from 'react';
import ReactDOM from 'react-dom';
import Packages from './Packages';

let element;

describe('Component:Packages', function() {

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    element = document.getElementById('app');
  });

  afterEach(done => {
    ReactDOM.unmountComponentAtNode(element);
    setTimeout(done);
  });

  it('should return the correct propTypes', function() {
    let propTypes = Packages.propTypes();
    expect(propTypes.package).to.be.a('function');
  });

  it('should return the correct default props', function() {
    let defaultProps = Packages.defaultProps();
    expect(defaultProps).to.deep.equal({
      package: {
        subscriptions: []
      }
    });
  });

  it('should display the package information', function() {
    let samplePackage = {
      total: 10,
      subscriptions: [{
        'type': 'broadband',
        'name': 'Fibre Unlimited',
        'cost': 10
      }]
    };
    ReactDOM.render(<Packages package={samplePackage} />, element);

    let subscriptionType = document.querySelectorAll('.subscription>div>div>p>strong>span')[0];
    expect(subscriptionType.innerHTML).to.equal('Broadband');

    let subscriptionName = document.querySelectorAll('.subscription>div>div>p')[0];
    expect(subscriptionName.innerHTML).to.equal('Fibre Unlimited');

    let subscriptionCost = document.querySelectorAll('.subscription>div>div>p>strong>small')[0];
    expect(subscriptionCost.textContent).to.equal(' £10.00');

  });

});
