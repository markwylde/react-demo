import $ from 'jquery';

export const downloadBillFromServer = () =>
  $.get('bill.json');
