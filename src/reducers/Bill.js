import Immutable from 'immutable';

const initialState = Immutable.Map({});

function fetchBill(bill) {
  return Immutable.Map(bill);
}

function Bill(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_BILL':
      return fetchBill(action.bill);

    default:
      return state;
  }
}

module.exports = Bill;
