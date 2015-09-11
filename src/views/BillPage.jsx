import React from 'react';

import Loading from '../components/Loading/Loading';
import NavBar from '../components/NavBar/NavBar';
import Packages from '../components/Bill/Packages';
import Charges from '../components/Bill/Charges';
import Purchases from '../components/Bill/Purchases';
import BillStore from '../stores/BillStore';
import BillActions from '../actions/BillActions';

export default class BillPage extends React.Component {

  constructor() {
    super();
    this.state = {
      bill: null
    };
    BillActions.generateBill();
  }

  componentDidMount() {
    BillStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    BillStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState({
      bill: BillStore.getBill()
    });
  }

  render() {
    if (!this.state.bill) {
      return (<Loading />);
    }

    return (
      <div className='container'>
        <NavBar />
        <h1>Your Statement</h1>
        <div className='statement-explanation'>
          <p>A total amount of <strong>&pound;{this.state.bill.total}</strong> is due for your subscription to ACME
            for the period between <strong>{this.state.bill.statement.period.from}</strong> and
            <strong> {this.state.bill.statement.period.to}</strong>. Payment is due on the
            <strong> {this.state.bill.statement.generated}</strong>.
          </p>
        </div>
        <Packages package={this.state.bill.package} />
        <Purchases purchases={this.state.bill.skyStore} />
        <Charges charges={this.state.bill.callCharges} />
      </div>
    );
  }

}

BillPage.displayName = 'Bill Page';
