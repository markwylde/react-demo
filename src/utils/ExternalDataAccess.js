import $ from 'jquery';
import BillActions from '../actions/BillActions.js';

function _sendBillData(bill) {
  BillActions.receiveBill(bill);
}

function getBillFromServer() {
  $.get('https://still-scrubland-9880.herokuapp.com/bill.json')
    .then(data => {
      _sendBillData(data);
    });
}

export default { getBillFromServer };
