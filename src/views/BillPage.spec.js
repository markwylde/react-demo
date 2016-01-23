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
  }
};

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

  it('should listen to BillStore changes on construction', function() {
    let spy = sinon.spy();
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

    ReactDOM.render(<BillPage />, element);
    expect(spy.calledOnce).to.be.true;

    ReactDOM.unmountComponentAtNode(document.body);
    BillPage.__ResetDependency__('BillStore');
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

});
