  import React, { Component } from 'react';
  import ReviewTile from './ReviewTile';

  class ReviewsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        reviewsData: []
      };
    }

    componentWillMount() {
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

    handleUpVote(event) {
      let reviewId = event.target.value;
      let payload = JSON.stringify( { reviewId: reviewId } );
      console.log(payload);
      fetch(`/api/v1/votes/up`, {
        credentials: 'same-origin',
        method: 'POST',
        'Content-Type': 'application/json',
        body: payload
      })
        .then((response) => response.json() )
        .then((body) => {
          console.log(body);
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
          handleUpVote = {this.handleUpVote}
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
