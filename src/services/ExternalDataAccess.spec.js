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
    const spy = sinon.spy();
    ExternalDataAccess.downloadBillFromServer()
      .then(spy);

    expect(spy.calledWith(sampleBillData)).to.be.true;
  });

});
