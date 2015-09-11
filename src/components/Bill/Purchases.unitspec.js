import '../../../test/unit-test-support/setup-test-dom';
import { expect } from 'chai';

import React from 'react/addons';
import Purchases from './Purchases';

let samplePurchases = {
  rentals: [
    { title: '50 Shades of Grey', cost: 4.99 }
  ],
  buyAndKeep: [
    { title: 'That\'s what she said', cost: 9.99 },
    { title: 'Brokeback mountain', cost: 9.99 }
  ],
  total: 24.97
};

describe('Component:Purchases', function() {

  afterEach(function(done) {
    React.unmountComponentAtNode(document.body);
    document.body.innerHTML = '';
    setTimeout(done);
  });

  it('should display the purchases information', function() {
    React.render(<Purchases purchases={samplePurchases} />, document.body);

    let totalRents = document.querySelectorAll('.purchases>p>strong')[0];
    expect(totalRents.textContent).to.equal('1');

    let totalBuys = document.querySelectorAll('.purchases>p>strong')[1];
    expect(totalBuys.textContent).to.equal('2');

    let totalCost = document.querySelectorAll('.purchases>p>strong')[2];
    expect(totalCost.textContent).to.equal('£24.97');

    let callsTable = document.querySelectorAll('.purchases table>tbody>tr');
    expect(callsTable.length).to.equal(3);

  });

  it('should populate the calls table correctly', function() {
    React.render(<Purchases purchases={samplePurchases} />, document.body);

    let firstCallCells = document.querySelectorAll('.purchases table>tbody>tr:nth-child(1)>td');
    expect(firstCallCells[0].textContent).to.equal('50 Shades of Grey');
    expect(firstCallCells[1].textContent).to.equal('Rental');
    expect(firstCallCells[2].textContent).to.equal('£4.99');

    let secondCallCells = document.querySelectorAll('.purchases table>tbody>tr:nth-child(3)>td');
    expect(secondCallCells[0].textContent).to.equal('Brokeback mountain');
    expect(secondCallCells[1].textContent).to.equal('Buy To Keep');
    expect(secondCallCells[2].textContent).to.equal('£9.99');

  });

});