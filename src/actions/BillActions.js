import AppDispatcher from '../dispatchers/AppDispatcher';
import BillConstants from '../constants/BillConstants';

export default {

  generateBill: function() {
    AppDispatcher.dispatch({
      actionType: BillConstants.GENERATE_BILL
    });
  }

};
