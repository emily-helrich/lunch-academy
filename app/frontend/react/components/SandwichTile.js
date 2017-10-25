import React from 'react';
import App from './App';
import {Link} from 'react-router-dom';

// var imageName = require{props.image_url};

const SandwichTile = (props) => {
  const sandwich_id = props.id;
  return(
    <div className="sandwich-tile">
      <div>{props.name}</div>
      <Link to={`/sandwiches/${sandwich_id}`}>{props.name}</Link>
      <div className="tile-content">
        <img src={props.image_url} />
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default SandwichTile
