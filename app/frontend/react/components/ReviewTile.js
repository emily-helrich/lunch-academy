import React, { Component } from 'react';

const ReviewTile = (props) => {

    return(
      <div className="review-tile">
        --------------------
        <div>{props.userEmail}</div>
        <div>{props.rating}</div>
        <p>{props.body}</p>
        --------------------
      </div>
    );
};

export default ReviewTile;
