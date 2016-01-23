import '../../../test/unit-test-support/setup-test-dom';
import { expect } from 'chai';

import React from 'react';
import ReactDOM from 'react-dom';

import Charges from './Charges';

let sampleCharges = {
  total: 5,
  calls: [{
    'called': '07716393769',
    'duration': '00:23:03',
    'cost': 2.13
  }]
};

let element;

describe('Component:Charges', function() {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    element = document.getElementById('app');
  });

  afterEach(done => {
    ReactDOM.unmountComponentAtNode(element);
    setTimeout(done);
  });

  it('should return the correct propTypes', function() {
    let propTypes = Charges.propTypes();
    expect(propTypes.charges).to.be.a('function');
  });

  it('should return the correct default props', function() {
    let defaultProps = Charges.defaultProps();
    expect(defaultProps).to.deep.equal({
      charges: {
        calls: []
      }
    });
  });

  it('should display the charges information', function() {
    ReactDOM.render(<Charges charges={sampleCharges} />, element);

    let totalCalls = document.querySelectorAll('.charges>p>strong')[0];
    expect(totalCalls.innerHTML).to.equal('1');

    let totalCost = document.querySelectorAll('.charges>p>strong')[1];
    expect(totalCost.textContent).to.equal('£5');

    let callsTable = document.querySelectorAll('.charges table>tbody>tr');
    expect(callsTable.length).to.equal(1);
  });

  it('should populate the calls table correctly', function() {
    ReactDOM.render(<Charges charges={sampleCharges} />, element);

    let firstCallCells = document.querySelectorAll('.charges table>tbody>tr>td');
    expect(firstCallCells[0].textContent).to.equal('07716393769');
    expect(firstCallCells[1].textContent).to.equal('00:23:03');
    expect(firstCallCells[2].textContent).to.equal('£2.13');
  });

});
