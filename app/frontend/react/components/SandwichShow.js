import React, { Component } from 'react';
import SandwichTile from './SandwichTile';
import ReviewsContainer from './ReviewsContainer';

class SandwichShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sandwich: {},
      loading: true,
    };
  }

  componentDidMount() {
    let sandwichID = this.props.match.params.id;
    console.log(sandwichID);
    fetch(`/api/v1/sandwiches/${sandwichID}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json() )
      .then((body) => {
        this.setState({
          sandwich: body.sandwich,
          loading: false,
        });
      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {
    const sandwich = this.state.sandwich;
    let reviewsContainer = '';
    if (!this.state.loading) {
      reviewsContainer =
        <ReviewsContainer
          sandwichId={this.state.sandwich.id}
        />;
    }
    return(
      <div>
        <SandwichTile
          key={sandwich.id}
          id={sandwich.id}
          name={sandwich.name}
          description={sandwich.description}
          image_url={sandwich.image_url}
        />
        <a href={ `/sandwiches/${sandwich.id}/reviews/new`}>New Review</a>
        {reviewsContainer}
      </div>
    );
  }
}
export default SandwichShow;
