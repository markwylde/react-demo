import React from 'react';
import StringManipulation from '../../services/StringManipulation';

export default class Charges extends React.Component {

  static propTypes() {
    return {
      purchases: React.PropTypes.bool.isRequired
    };
  }

  static defaultProps() {
    return {
      purchases: {
        rentals: [],
        buyAndKeep: []
      }
    };
  }

  renderTablePart(items, type) {
    let tablePart = items.map((item, idx) => {
      return (
        <tr key={idx}>
          <td>{item.title}</td>
          <td>{type}</td>
          <td>&pound;{item.cost}</td>
        </tr>
      );
    });
    return tablePart;
  }

  render() {
    let rentals = this.props.purchases && this.props.purchases.rentals;
    let buyAndKeep = this.props.purchases && this.props.purchases.buyAndKeep;

    return (
      <div className='purchases'>
        <h3>Your Purchases</h3>
        <p>
          This month you rented <strong>{rentals && rentals.length}</strong>
        {' ' + StringManipulation.pluralise('movie', rentals && rentals.length)} and
          bought <strong>{this.props.purchases && this.props.purchases.buyAndKeep.length}</strong> to keep. This cost
          you a total of <strong>&pound;{this.props.purchases && this.props.purchases.total}</strong>.
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
            {this.renderTablePart(rentals || [], 'Rental')}
            {this.renderTablePart(buyAndKeep || [], 'Buy To Keep')}
          </tbody>
        </table>
      </div>
    );
  }

}

Charges.displayName = 'Charges';
