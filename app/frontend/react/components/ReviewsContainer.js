  import React, { Component } from 'react';
  import ReviewTile from './ReviewTile';

  class ReviewsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        reviewsData: []
      };
    }

    componentDidMount() {
      let sandwichId = this.props.match.params.sandwich_id;
      fetch(`/api/v1/sandwiches/${sandwichId}/reviews`, {
        credentials: 'same-origin',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
        .then((response) => response.json() )
        .then((body) => {
          this.setState({ reviewsData: body.reviews});
        })
        .catch(function(error){
          console.log(error);
        });
    }

    render() {
      let reviews = this.state.reviewsData.map(review => (
        <ReviewTile
          key = {review.id}
          id = {review.id}
          userId = {review.user_id}
          sandwichId = {review.sandwich_id}
          rating = {review.rating}
          body = {review.body}
          createdAt = {review.created_at}
          updatedAt = {review.updated_at}
          userEmail = {review.user.email}
        />
      ));
      return(
        <div>
          {reviews}
        </div>
      );
    }
  }

  export default ReviewsContainer;
