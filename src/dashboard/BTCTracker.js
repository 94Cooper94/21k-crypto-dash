import React from 'react';
import $ from 'jquery';

export default class BTCTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0.00,
      lastFetch: ""
    }
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <div>
        <h1>
          BTC Price: {this.state.price}
          <small>
            {this.state.lastFetch}
          </small>
        </h1>
      </div>
    );
  }
}