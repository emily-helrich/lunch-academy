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
      let payload = JSON.stringify( { review_id: event.target.value } );
      console.log(payload);
      fetch(`/api/v1/votes/up`, {
        credentials: 'same-origin',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: payload
      })
        .then((response) => response.json() )
        .then((body) => {
          console.log(body);
        });
    }

    getVoteCount(reviewId) {
      let payload = JSON.stringify( { review_id: reviewId } );
      console.log(payload);
      fetch(`/api/v1/votes/reviews`, {
        credentials: 'same-origin',
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
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
          voteCount = {this.getVoteCount(review.id)}
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
