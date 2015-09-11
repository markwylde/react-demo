import React from 'react';

export default class Charges extends React.Component {

  static defaultProps() {
    return {
      charges: null
    };
  }

  render() {
    return (
      <div className='charges'>
        <h3>Your Charges</h3>
        <p>This month you made a total of <strong>{ this.props.charges.calls.length }</strong> calls
        which came to a total of <strong>&pound;{ this.props.charges.total }</strong></p>
      <table className='table table-bordered table-striped charges__table'>
          <thead>
            <tr>
              <td>Number Called</td>
              <td>Duration</td>
              <td>Cost</td>
            </tr>
          </thead>
          <tbody>
            { this.props.charges.calls.map((call, idx) => {
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
      </div>
    );
  }

}
