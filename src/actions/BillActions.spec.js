import { expect } from 'chai';
import sinon from 'sinon';

import BillActions from './BillActions.js';
import AppDispatcher from '../dispatchers/AppDispatcher';

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

describe('Actions:BillAction', function() {

  it('should raise a generate bill event', function() {
    let spy = sinon.spy(AppDispatcher, 'dispatch');
    BillActions.receiveBill(sampleBillData);
    expect(spy.calledOnce).to.be.true;
  });

});
