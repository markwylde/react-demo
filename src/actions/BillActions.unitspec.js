import { expect } from 'chai';
import sinon from 'sinon';

import BillActions from './BillActions.js';
import AppDispatcher from '../dispatchers/AppDispatcher';

describe('BillAction', function() {

  it('should raise a generate bill event', function() {
    let spy = sinon.spy(AppDispatcher, 'dispatch');
    BillActions.generateBill();
    expect(spy.calledOnce).to.be.true;
  });

});
