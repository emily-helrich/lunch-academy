import React, { Component } from 'react';

class SandwichView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sandwichData: {}
    };
  }

  componentWillMount() {
    fetch('/api/v1/sandwiches.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => { return response.json() })
    .then(data => { this.setState({ media: data.media }) })
  }

  render() {

    return(
      <div className="heading">

      </div>
    );
  }
}

export default SandwichView;
