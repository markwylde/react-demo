import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';

import BillConstants from '../constants/BillConstants';

let _bill = null;

function generateBill(bill) {
  _bill = bill;
}

class BillStore extends EventEmitter {

  getBill() {
    return _bill;
  }

  emitChange() {
    this.emit('CHANGE');
  }

  addChangeListener(callback) {
    this.on('CHANGE', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('CHANGE', callback);
  }
}

let billStore = new BillStore();

let registeredCallback = (action) => {
  switch (action.actionType) {
    case BillConstants.GENERATE_BILL:
      generateBill(action.bill);
      billStore.emitChange();
      break;
  }
};

AppDispatcher.register(registeredCallback);

export default billStore;
