import React from 'react'

// var imageName = require{props.image_url};

const SandwichTile = (props) => (
  <div className="sandwich-tile">
    <h3>{props.name}</h3>
    <div className="tile-content">
      <img src={props.image_url} />
      <p className="description">{props.description}</p>
    </div>
  </div>
)

export default SandwichTile
