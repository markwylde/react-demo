import $ from 'jquery';

function downloadBillFromServer() {
  return $.get('bill.json');
}

export default { downloadBillFromServer };
