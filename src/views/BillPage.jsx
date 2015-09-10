import React from 'react';

import BillActions from '../actions/BillActions.js';

export class BillPage extends React.Component {

  constructor() {
    super();
    this.state = {
      test: 1
    };
    BillActions.generateBill();
  }

  add(amount) {
    this.setState({
      test: this.state.test + amount
    });
  }

  render() {
    return (
      <div>
        <span>This is the home page: {this.state.test}</span>
        <button onClick={this.add.bind(this, 2)}>+ 2</button>
      </div>
    );
  }

}
