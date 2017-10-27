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
      reviewsContainer = <ReviewsContainer sandwichId={sandwich.id} />;
    }
    return(
      <div>
      <div className='media' >
        <img className="w-50 mr-3 my-2 z-depth-2" src={sandwich.image_url} />
        <div className="media-body" >
          <h1 className="h1 mt-0">{sandwich.name}</h1>
            {sandwich.description}
        </div>
      </div>
      <a href={ `/sandwiches/${sandwich.id}/reviews/new`}>New Review</a>
      <div className="reviews">
        {reviewsContainer}
      </div>
      </div>
    );
  }
}

export default SandwichShow;
