import jquery from '../../test/unit-test-support/mock-jquery-ajax';
import { expect } from 'chai';
import sinon from 'sinon';

import ExternalDataAccess from './ExternalDataAccess.js';

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

jquery.mockGet(sampleBillData);

describe('Utils:ExternalDataAccess', function() {

  it('should grab the bill from ajax endpoint', function() {
    let spy = sinon.spy();

    ExternalDataAccess.__Rewire__('_sendBillData', function(bill) {
      expect(bill).to.equal(sampleBillData);
      spy();
    });

    ExternalDataAccess.getBillFromServer();

    expect(spy.calledOnce).to.be.true;

    ExternalDataAccess.__ResetDependency__('_sendBillData');
  });

  it('should send data to BillAction', function() {
    let spy = sinon.spy();

    ExternalDataAccess.__Rewire__('BillActions', {
      receiveBill: function() {
        spy();
      }
    });

    let _sendBillData = ExternalDataAccess.__get__('_sendBillData');
    _sendBillData(sampleBillData);

    expect(spy.calledOnce).to.be.true;

    ExternalDataAccess.__ResetDependency__('BillActions');
    ExternalDataAccess.__ResetDependency__('_sendBillData');
  });

});
