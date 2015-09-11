import React from 'react';

import NavBar from '../components/NavBar/NavBar';
import Packages from '../components/Bill/Packages';
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

  _onChange() {
    this.setState({
      bill: BillStore.getBill()
    }, () => {
      console.log(this.state.bill);
    });
  }

  componentDidMount() {
    BillStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    BillStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    if (!this.state.bill) {
      return <div>Loading</div>;
    }

    return (
      <div className='container'>
        <NavBar />
        <Packages package={this.state.bill.package} />
      </div>
    );
  }

}
