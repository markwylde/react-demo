import jquery from '../../test/unit-test-support/mock-jquery-ajax';

import { expect } from 'chai';
import sinon from 'sinon';
import rewire from 'rewire';

import BillConstants from '../constants/BillConstants';

let sampleBillData = {
  name: 'Joe Bloggs'
};
jquery.mockGet(sampleBillData);

describe('BillStore', function() {

  beforeEach(function() {
    this.BillStore = rewire('./BillStore');
    this.BillStore.registeredCallback = this.BillStore.__get__('registeredCallback');
  });

  it('should set the bill correctly', function() {
    this.BillStore.registeredCallback({
      actionType: 'GENERATE_BILL'
    });

    let billData = this.BillStore.getBill();
    expect(billData).to.equal(sampleBillData);
  });

  it('should emitChange event when the bill is set', function() {
    let spy = sinon.spy(this.BillStore, 'emitChange');

    this.BillStore.registeredCallback({
      actionType: BillConstants.GENERATE_BILL
    });

    expect(spy.calledOnce).to.be.true;
  });

});
