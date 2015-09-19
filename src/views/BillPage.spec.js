import '../../test/unit-test-support/setup-test-dom';

import sinon from 'sinon';
import { expect } from 'chai';
import BillPage from './BillPage';

import React from 'react/addons';

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

describe('View:BillPage', function() {

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';
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

    React.render(<BillPage />, document.body);
    expect(spy.calledOnce).to.be.true;

    React.unmountComponentAtNode(document.body);
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
    expect(result._store.props.className).to.contain('bill-page');
  });

});
