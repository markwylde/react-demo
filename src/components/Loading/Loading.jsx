import React from 'react';

export default class Loading extends React.Component {

  render() {
    return (
      <div className='container text-center'>
        <i className='fa fa-spinner fa-spin'></i> Loading...
      </div>
    );
  }

}

Loading.displayName = 'Loading';
