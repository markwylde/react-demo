import '../../test/unit-test-support/setup-test-dom';

import { expect } from 'chai';
import BillPage from './BillPage';

import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

let sampleBillData = Immutable.Map({
  statement: {
    generated: '2015-01-11',
    due: '2015-01-25',
    period: {
      from: '2015-01-26',
      to: '2015-02-25'
    }
  },
  total: 110.1
});

let element;

describe('View:BillPage', function() {

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    element = document.getElementById('app');
  });

  afterEach(done => {
    ReactDOM.unmountComponentAtNode(element);
    setTimeout(done);
  });

  it('should display loader if bill is undefined', function() {
    let result = BillPage();
    expect(result.type.name).to.equal('Loading');
  });

  it('should display BillPage if bill is defined', function() {
    let result = BillPage({bill: sampleBillData});
    expect(result.props.className).to.equal('container bill-page');
  });

  it('should display the total amount of the bill', function() {
    ReactDOM.render(<BillPage bill={sampleBillData} />, element);
    let totalCalls = document.querySelectorAll('.bill-total')[0];
    expect(totalCalls.textContent).to.equal('£110.10');
  });

});
