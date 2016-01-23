import { expect } from 'chai';

import Bill from './Bill.js';

describe('Actions:BillAction', function() {

  it('should store on a FETCH_BILL event', function() {
    const NewBillState = Bill({}, { type: 'FETCH_BILL', bill: {a: 1} });
    expect(NewBillState.toObject()).to.deep.equal({a: 1});
  });

  it('should return default store on an unknown event', function() {
    const NewBillState = Bill(undefined, { type: 'UNKNOWN_EVENT' });
    expect(NewBillState.toObject()).to.deep.equal({});
  });

});
