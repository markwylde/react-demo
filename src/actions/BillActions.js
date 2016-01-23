import store from '../stores/Store.js';

import { downloadBillFromServer } from '../services/ExternalDataAccess';

export const fetchBill = () => {
  return downloadBillFromServer().then(bill =>
    store.dispatch({ type: 'FETCH_BILL', bill })
  );
};
