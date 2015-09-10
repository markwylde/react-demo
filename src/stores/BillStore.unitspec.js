import { expect } from 'chai';
import sinon from 'sinon';
import rewire from 'rewire';

import BillConstants from '../constants/BillConstants';

let sampleBillData = {
  name: 'Joe Bloggs'
};

describe('BillStore', function() {

  beforeEach(function() {
    this.BillStore = rewire('./BillStore');
    this.BillStore.registeredCallback = this.BillStore.__get__('registeredCallback');
  });

  it('should set the bill correctly', function() {
    this.BillStore.registeredCallback({
      actionType: 'GENERATE_BILL',
      bill: sampleBillData
    });

    let billData = this.BillStore.getBill();
    expect(billData).to.equal(sampleBillData);

  });

  it('should emitChange event when the bill is set', function() {
    let spy = sinon.spy(this.BillStore, 'emitChange');

    this.BillStore.registeredCallback({
      actionType: BillConstants.GENERATE_BILL,
      bill: {}
    });

    expect(spy.calledOnce).to.be.true;
  });

});
