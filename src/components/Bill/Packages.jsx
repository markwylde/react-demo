import React from 'react';
import StringManipulation from '../../services/StringManipulation';

export default class Packages extends React.Component {

  static defaultProps() {
    return {
      package: null
    };
  }

  render() {
    return (
      <div>
        <h2>Your Package</h2>
        <div className='row subscription'>
        { this.props.package.subscriptions.map((subscription, idx) => {
          return (
              <div key={idx} className='col-sm-4'>
                <div className='alert alert-success'>
                  <p>{subscription.name}</p>
                  <p><strong>
                    {StringManipulation.firstLetterUpperCase(subscription.type)}
                    <small> &pound;{parseFloat(subscription.cost).toFixed(2)}</small>
                  </strong></p>
                </div>
              </div>
          );
        })}
        </div>
        <div className='alert alert-info'>
          The monthly cost for your <strong>ACME Example</strong> package is:
          &pound;{parseFloat(this.props.package.total).toFixed(2)}
        </div>
      </div>
    );
  }

}
