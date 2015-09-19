import AppDispatcher from '../dispatchers/AppDispatcher';
import BillConstants from '../constants/BillConstants';

export default {

  receiveBill: function(bill) {
    AppDispatcher.dispatch({
      actionType: BillConstants.RECEIVE_BILL,
      bill: bill
    });
  }

};
