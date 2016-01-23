import '../node_modules/css-reset/reset.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './assets/scss/core.scss';

import BillPage from './views/BillPage';
import ExternalDataAccess from './utils/ExternalDataAccess.js';
import React from 'react';
import ReactDOM from 'react-dom';

ExternalDataAccess.getBillFromServer();

ReactDOM.render(<BillPage />, document.getElementById('app'));
