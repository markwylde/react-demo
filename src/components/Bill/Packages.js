import React from 'react';
import StringManipulation from '../../services/StringManipulation';

const Packages = props =>
  <div>
    <h3>Your Package</h3>
    <div className='row subscription'>
    {props.package && props.package.subscriptions.map((subscription, idx) => {
      return (
          <div className='col-sm-4' key={idx} >
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
      &pound;{parseFloat(props.package && props.package.total).toFixed(2)}
    </div>
  </div>;

Packages.propTypes = () => ({
  package: React.PropTypes.bool.isRequired
});

Packages.defaultProps = () => ({
  package: {
    subscriptions: []
  }
});

Packages.displayName = 'Packages';

export default Packages;
