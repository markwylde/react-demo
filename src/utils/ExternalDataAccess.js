import $ from 'jquery';
import BillActions from '../actions/BillActions.js';

function _sendBillData(bill) {
  BillActions.receiveBill(bill);
}

function getBillFromServer() {
  $.get('bill.json')
    .then(data => {
      _sendBillData(data);
    });
}

export default { getBillFromServer };
