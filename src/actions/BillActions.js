import AppDispatcher from '../dispatchers/AppDispatcher';
import BillConstants from '../constants/BillConstants';

export default {

  generateBill: function(bill) {
    AppDispatcher.dispatch({
      actionType: BillConstants.GENERATE_BILL,
      bill
    });
  }

};
