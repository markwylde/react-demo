import jquery from '../../test/unit-test-support/mock-jquery-ajax';

import { expect } from 'chai';
import sinon from 'sinon';
import rewire from 'rewire';

import BillConstants from '../constants/BillConstants';

let sampleBillData = {
  name: 'Joe Bloggs'
};
jquery.mockGet(sampleBillData);

describe('Store:BillStore', function() {

  beforeEach(function() {
    this.BillStore = rewire('./BillStore');
    this.BillStore.registeredCallback = this.BillStore.__get__('registeredCallback');
  });

  it('should set the bill correctly', function() {
    this.timeout(5000);
    return new Promise((resolve) => {
      let changer = () => {
        let billData = this.BillStore.getBill();
        expect(billData).to.equal(sampleBillData);
        resolve();
        this.BillStore.removeChangeListener(changer);
      };
      this.BillStore.addChangeListener(changer);

      this.BillStore.registeredCallback({
        actionType: 'GENERATE_BILL'
      });
    });
  });

  it('should emitChange event when the bill is set', function() {
    this.timeout(5000);
    return new Promise((resolve) => {
      let spy = sinon.spy(this.BillStore, 'emitChange');

      let changer = () => {
        expect(spy.calledOnce).to.be.true;
        resolve();
        this.BillStore.removeChangeListener(changer);
      };

      this.BillStore.addChangeListener(changer);

      this.BillStore.registeredCallback({
        actionType: BillConstants.GENERATE_BILL
      });

    });
  });

});
