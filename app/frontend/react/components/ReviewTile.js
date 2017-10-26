import React, { Component } from 'react';

const ReviewTile = (props) => {
    return(
      <div className="review-tile">
        <div className='email'>{props.userEmail}</div>
        <div className='rating'>{props.rating}</div>
        <p className='rating-body'>{props.body}</p>
        <button
          onClick={props.handleUpVote}
          value={props.id}>
            Up Vote
        </button>
        <button
          onClick={props.handleDownVote}
          value={props.id}>
            Down Vote
        </button>
        <p>Vote Count: {props.voteCount}</p>
      </div>
    );
};

export default ReviewTile;
