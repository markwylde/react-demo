import React, { PropTypes } from 'react';

const Charges = (props) =>
  <div className='charges'>
    <h3>Your Charges</h3>
    <p>This month you made a total of <strong>{props.charges && props.charges.calls.length}</strong> calls
    which came to a total of <strong>&pound;{props.charges && props.charges.total}</strong></p>
    <table className='table table-bordered table-striped charges__table'>
      <thead>
        <tr>
          <td>Number Called</td>
          <td>Duration</td>
          <td>Cost</td>
        </tr>
      </thead>
      <tbody>
        {props.charges && props.charges.calls.map((call, idx) => {
          return (
            <tr key={idx}>
              <td>{call.called}</td>
              <td>{call.duration}</td>
              <td>&pound;{call.cost}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>;

Charges.propTypes = () => ({
  charges: PropTypes.bool.isRequired
});
Charges.defaultProps = () => ({
  charges: {
    calls: []
  }
});

Charges.displayName = 'Charges';

module.exports = Charges;
