import React, { Component } from 'react';

class SandwichContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // componentWillMount() {
  //   fetch('/api/v1/media.json', {
  //     credentials: 'same-origin',
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   .then(response => { return response.json() })
  //   .then(data => { this.setState({ media: data.media }) })
  // }

  render() {

    return(
      <div className="heading">
        <h1>Helllloo from SandwichContainer react component</h1>
      </div>
    );
  }
}

export default SandwichContainer;
