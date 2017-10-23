import React, { Component } from 'react';
import SandwichTile from './SandwichTile'

class SandwichShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sandwich: {}
    };
  }

  componentDidMount() {
    let sandwichID = this.props.match.params.id
    fetch(`/api/v1/sandwiches/${sandwichID}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json() )
      .then((body) => {
        this.setState({
          sandwich: body
        })
      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {

    return(
      <SandwichTile
        key={this.state.id}
        id={this.state.id}
        description={this.state.description}
        image_url={this.state.image_url}
      />
    )
  }
}
export default SandwichShow;
