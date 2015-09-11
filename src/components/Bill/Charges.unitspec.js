import '../../../test/unit-test-support/setup-test-dom';
import { expect } from 'chai';

import React from 'react/addons';
import Charges from './Charges';

let sampleCharges = {
  total: 5,
  calls: [{
    'called': '07716393769',
    'duration': '00:23:03',
    'cost': 2.13
  }]
};

describe('Component:Charges', function() {

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';
    setTimeout(done);
  });

  it('should display the charges information', function() {
    React.render(<Charges charges={sampleCharges} />, document.body);

    let totalCalls = document.querySelectorAll('.charges>p>strong')[0];
    expect(totalCalls.innerHTML).to.equal('1');

    let totalCost = document.querySelectorAll('.charges>p>strong')[1];
    expect(totalCost.textContent).to.equal('£5');

    let callsTable = document.querySelectorAll('.charges table>tbody>tr');
    expect(callsTable.length).to.equal(1);

  });

  it('should populate the calls table correctly', function() {
    React.render(<Charges charges={sampleCharges} />, document.body);

    let firstCallCells = document.querySelectorAll('.charges table>tbody>tr>td');
    expect(firstCallCells[0].textContent).to.equal('07716393769');
    expect(firstCallCells[1].textContent).to.equal('00:23:03');
    expect(firstCallCells[2].textContent).to.equal('£2.13');

  });

});
