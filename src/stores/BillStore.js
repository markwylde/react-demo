import $ from 'jquery';
import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';

import BillConstants from '../constants/BillConstants';

let _bill = null;

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

function generateBill() {
  $.get('https://still-scrubland-9880.herokuapp.com/bill.json')
    .then(data => {
      setTimeout(() => {
        _bill = data;
        billStore.emitChange();
      }, 100);
    });
}

let registeredCallback = (action) => {
  switch (action.actionType) {
    case BillConstants.GENERATE_BILL:
      generateBill();
      break;
  }
};

AppDispatcher.register(registeredCallback);

export default billStore;
