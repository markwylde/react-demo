import React, { PropTypes } from 'react';
import StringManipulation from '../../services/StringManipulation';

const Purchases = props => {

  let rentals = props.purchases && props.purchases.rentals;
  let buyAndKeep = props.purchases && props.purchases.buyAndKeep;

  return (
    <div className='purchases'>
      <h3>Your Purchases</h3>
      <p>
        This month you rented <strong>{rentals && rentals.length}</strong>
      {' ' + StringManipulation.pluralise('movie', rentals && rentals.length)} and
        bought <strong>{props.purchases && props.purchases.buyAndKeep.length}</strong> to keep. This cost
        you a total of <strong>&pound;{props.purchases && props.purchases.total}</strong>.
      </p>
      <table className='table table-bordered table-striped purchases__table'>
        <thead>
          <tr>
            <td>Number Called</td>
            <td>Duration</td>
            <td>Cost</td>
          </tr>
        </thead>
        <tbody>
          {(rentals || []).map((item, idx) =>
            <tr key={idx}>
              <td>{item.title}</td>
              <td>Rental</td>
              <td>&pound;{item.cost}</td>
            </tr>
          )}

          {(buyAndKeep || []).map((item, idx) =>
            <tr key={idx}>
              <td>{item.title}</td>
              <td>Buy To Keep</td>
              <td>&pound;{item.cost}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

Purchases.propTypes = () => ({
  purchases: PropTypes.bool.isRequired
});

Purchases.defaultProps = () => ({
  purchases: {
    rentals: [],
    buyAndKeep: []
  }
});

Purchases.displayName = 'Purchases';

export default Purchases;
