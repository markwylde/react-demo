import { expect } from 'chai';
import sinon from 'sinon';
import BillStore from './BillStore';

import BillConstants from '../constants/BillConstants';

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

describe('Store:BillStore', function() {

  beforeEach(function() {
    BillStore.registeredCallback = BillStore.__get__('registeredCallback');
  });

  afterEach(function() {
    BillStore.__ResetDependency__('registeredCallback');
  });

  it('should set the bill correctly', function() {
    this.timeout(5000);
    return new Promise((resolve) => {
      let changer = () => {
        expect(BillStore.getBill()).to.equal(sampleBillData);
        resolve();
        BillStore.removeChangeListener(changer);
      };
      BillStore.addChangeListener(changer);

      BillStore.registeredCallback({
        actionType: BillConstants.RECEIVE_BILL,
        bill: sampleBillData
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
        actionType: BillConstants.RECEIVE_BILL,
        bill: sampleBillData
      });

    });
  });

});
