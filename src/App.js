import '../node_modules/css-reset/reset.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './assets/scss/core.scss';

import { fetchBill } from './actions/BillActions';
import store from './stores/Store';

import BillPage from './views/BillPage';
import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
  const state = store.getState();
  ReactDOM.render(<BillPage {...state} />, document.getElementById('app'));
};

store.subscribe(render);

fetchBill();
