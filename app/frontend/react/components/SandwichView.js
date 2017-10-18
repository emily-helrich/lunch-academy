import React, { Component } from 'react';

class SandwichView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sandwichData: {}
    };
  }

  // componentWillMount() {
  //   fetch('/api/v1/sandwiches.json', {
  //     credentials: 'same-origin',
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then((response) => response.json() )
  //     .then((body) => {
  //       this.setState({ sandwichData: body});
  //     })
  //     .catch(function(error){
  //       console.log(error);
  //     });
  // }

  render() {
    // sandwichData = this.state.sandwichData;
    return(
      <div className="heading">
        HI +FROM SANDWICH VIEW
      </div>
    );
  }
}

export default SandwichView;
