import { expect } from 'chai';
import sinon from 'sinon';

import * as BillActions from './BillActions.js';

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

let callback = sinon.spy();

describe('Actions:BillAction', function() {

  beforeEach(done => {
    BillActions.__Rewire__('store', {
      dispatch: (action) => {
        callback(action);
        done();
      }
    });

    BillActions.__Rewire__('downloadBillFromServer', () => {
      return Promise.resolve(sampleBillData);
    });

    BillActions.fetchBill();
  });

  it('should raise a FETCH_BILL event', function() {
    expect(callback.calledWith({
      type: 'FETCH_BILL', bill: sampleBillData
    })).to.be.true;
  });

});
