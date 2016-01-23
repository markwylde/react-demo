import '../../test/unit-test-support/setup-test-dom';

import sinon from 'sinon';
import { expect } from 'chai';
import BillPage from './BillPage';

import React from 'react';
import ReactDOM from 'react-dom';

let sampleBillData = {
  statement: {
    generated: '2015-01-11',
    due: '2015-01-25',
    period: {
      from: '2015-01-26',
      to: '2015-02-25'
    }
  },
  total: 110.1
};

let element, spy;

describe('View:BillPage', function() {

  beforeEach(() => {
    spy = sinon.spy();
    BillPage.__Rewire__('BillStore', {
      addChangeListener: function(boundFn) {
        spy();
        boundFn();
      },
      removeChangeListener: function() {
      },
      getBill: function() {
        return sampleBillData;
      }
    });
    document.body.innerHTML = '<div id="app"></div>';
    element = document.getElementById('app');
  });

  afterEach(done => {
    ReactDOM.unmountComponentAtNode(element);
    BillPage.__ResetDependency__('BillStore');
    setTimeout(done);
  });

  it('should listen to BillStore changes on construction', function() {
    ReactDOM.render(<BillPage />, element);
    expect(spy.calledOnce).to.be.true;
  });

  it('should display loader if bill is undefined', function() {
    let billPage = new BillPage();

    billPage.state.bill = null;
    let result = billPage.render();
    expect(result.type.name).to.equal('Loading');
  });

  it('should display BillPage if bill is defined', function() {
    let billPage = new BillPage();

    let result = billPage.render();
    expect(result.props.className).to.contain('bill-page');
  });

  it('should display the total amount of the bill', function() {
    ReactDOM.render(<BillPage />, element);
    let totalCalls = document.querySelectorAll('.bill-total')[0];
    expect(totalCalls.textContent).to.equal('£110.10');
  });

});
