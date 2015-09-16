import jquery from '../../test/unit-test-support/mock-jquery-ajax';

import { expect } from 'chai';
import sinon from 'sinon';
import BillStore from './BillStore';

import BillConstants from '../constants/BillConstants';

let sampleBillData = {
  name: 'Joe Bloggs'
};
jquery.mockGet(sampleBillData);

describe('Store:BillStore', function() {

  beforeEach(function() {
    BillStore.registeredCallback = BillStore.__get__('registeredCallback');
  });

  it('should set the bill correctly', function() {
    this.timeout(5000);
    return new Promise((resolve) => {
      let changer = () => {
        let billData = BillStore.getBill();
        expect(billData).to.equal(sampleBillData);
        resolve();
        BillStore.removeChangeListener(changer);
      };
      BillStore.addChangeListener(changer);

      BillStore.registeredCallback({
        actionType: 'GENERATE_BILL'
      });
    });
  });

  it('should emitChange event when the bill is set', function() {
    this.timeout(5000);
    return new Promise((resolve) => {
      let spy = sinon.spy(BillStore, 'emitChange');

      let changer = () => {
        expect(spy.calledOnce).to.be.true;
        resolve();
        BillStore.removeChangeListener(changer);
      };

      BillStore.addChangeListener(changer);

      BillStore.registeredCallback({
        actionType: BillConstants.GENERATE_BILL
      });

    });
  });

});
