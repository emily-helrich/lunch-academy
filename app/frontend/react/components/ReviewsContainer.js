  import React, { Component } from 'react';
  import ReviewTile from './ReviewTile';

  class ReviewsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sandwichId: props.sandwichId,
        reviewsData: [],
        alerts: null
      };
      this.handleUpVote = this.handleUpVote.bind(this);
      this.handleDownVote = this.handleDownVote.bind(this);
    }

    componentDidMount() {
      let sandwichId = this.state.sandwichId;
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

      fetch(`/api/v1/votes/up`, {
        credentials: 'same-origin',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: payload
      })
        .then((response) => response.json() )
        .then((body) => {
          console.log(body);
          this.setState({
            alerts: body.message
          });
        });
    }

    handleDownVote(event) {
      let payload = JSON.stringify( { review_id: event.target.value } );

      fetch(`/api/v1/votes/down`, {
        credentials: 'same-origin',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: payload
      })
        .then((response) => response.json() )
        .then((body) => {
          console.log(body);
          this.setState({
            alerts: body.message
          });
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
          voteCount = {review.vote_count}
          handleUpVote = {this.handleUpVote}
          handleDownVote = {this.handleDownVote}
        />
      ));
      return(
        <div className="review-list">
          <p>{this.state.alerts}</p>
          {reviews}
        </div>
      );
    }
  }

  export default ReviewsContainer;
