import React from 'react';

import Loading from '../components/Loading/Loading';
import NavBar from '../components/NavBar/NavBar';
import Packages from '../components/Bill/Packages';
import Charges from '../components/Bill/Charges';
import Purchases from '../components/Bill/Purchases';

export const BillPage = props => {
  if (!props || props && !props.bill) {
    return (<Loading />);
  }
  const {bill} = props;

  return (
    <div className='container bill-page'>
      <NavBar />
      <h1>Your Statement</h1>
      <div className='statement-explanation'>
        <p>A total amount of <strong className="bill-total">
          &pound;{parseFloat(bill.get('total')).toFixed(2)}
        </strong> is due for your subscription to ACME
        for the period between <strong>{bill.get('statement.period.from')}</strong> and
        <strong> {bill.get('statement.period.to')}</strong>. Payment is due on the
        <strong> {bill.get('statement.generated')}</strong>.
        </p>
      </div>
      <Packages package={bill.get('package')} />
      <Purchases purchases={bill.get('store')} />
      <Charges charges={bill.get('callCharges')} />
    </div>
  );
};

BillPage.propTypes = () => ({
  charges: {
    calls: []
  }
});

BillPage.displayName = 'Bill Page';

export default BillPage;
