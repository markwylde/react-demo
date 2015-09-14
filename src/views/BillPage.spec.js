import '../../test/unit-test-support/setup-test-dom';
import { getCallbackOnPrivate } from '../../test/unit-test-support/rewire-privates';

import { expect } from 'chai';
import rewire from 'rewire';

import React from 'react/addons';

describe('View:BillPage', function() {

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';
    setTimeout(done);
  });

  it('should listen to BillStore changes on construction', function() {
    let BillPage = rewire('./BillPage');
    let callback = getCallbackOnPrivate(BillPage, 'BillStore', 'addChangeListener');

    React.render(<BillPage />, document.body);

    expect(callback.calledOnce).to.be.true;
  });

  it('should display loader if bill is undefined', function() {
    let BillPage = rewire('./BillPage');
    let billPage = new BillPage();

    billPage.state.bill = null;
    let result = billPage.render();
    expect(result.type.name).to.equal('Loading');
  });

  it('should display BillPage if bill is defined', function() {
    let BillPage = rewire('./BillPage');
    let billPage = new BillPage();

    let result = billPage.render();
    expect(result._store.props.className).to.contain('bill-page');
  });

});
