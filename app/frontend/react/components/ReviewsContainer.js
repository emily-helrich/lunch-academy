  import React, { Component } from 'react';
  import sandwich_icon from '../../../assets/images/sandwich_icon.png';

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
      this.handleCloseAlert = this.handleCloseAlert.bind(this);
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

    handleCloseAlert() {
      this.setState({
        alerts: null
      });
    }

    render() {
      let sandwichRating = (rating) => {
        let sandwichArray = [];
          for (let i = 0; i < rating; i++) {
            sandwichArray.push(
              <img key={i} src={sandwich_icon} height='30px' width='50px'/>
            );
          }
        return sandwichArray;
      };

      let reviews = this.state.reviewsData.map(review => {
        let sandwiches = sandwichRating(review.rating);
        return (
          <div key={review.id} className="col-lg-7 ml-xl-4 mb-4">
             <a href="" className="teal-text"/>
             <p>from <strong>{review.user.email}</strong>, {review.created_at}</p>
             <p><strong>Rating: </strong>{sandwiches}</p>
             <p><strong>Review: </strong>{review.body}</p>
             <button onClick={this.handleUpVote}
             value={review.id} type="button"
             className="ml-0 btn btn-sm btn-outline-success">Up Vote
             </button>
             <button onClick={this.handleDownVote}
             value={review.id} type="button"
             className="btn btn-sm btn-outline-danger">Down Vote
             </button>

             <p>Vote Count: {review.vote_count}</p>
           </div>
       );
      });

      let alerts = this.state.alerts;
      if (alerts) {
        alerts =
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleCloseAlert}>
              <span aria-hidden="true">&times;</span>
            </button>
            {this.state.alerts}
        </div>;
      }

      return(
      <section className="section extra-margins pb-3 mx-auto text-lg-left">
        <p className="section-heading h3 pt-4">Top Voted Reviews</p>
        {alerts}
        <div className="list-group">
          {reviews}
        </div>
      </section>
      );
    }
  }

  export default ReviewsContainer;
