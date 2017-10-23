import React, { Component } from 'react';

const ReviewTile = (props) => {

    return(
      <div className="review-tile">
        <div className='email'>{props.userEmail}</div>
        <div className='rating'>{props.rating}</div>
        <p className='rating-body'>{props.body}</p>

      </div>
    );
};

export default ReviewTile;
