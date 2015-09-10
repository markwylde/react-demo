import React from 'react';

// import PropertyActions from '../../actions/PropertyActions.js';

export class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      test: 1
    };
  }

  add(amount) {
    this.setState({
      test: this.state.test + amount
    });
  }

  render() {
    return (
      <div>
        <span>This is the home page: {this.state.test}</span>
        <button onClick={this.add.bind(this, 2)}>+ 2</button>
      </div>
    );
  }

}
