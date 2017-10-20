import React from 'react'

// var imageName = require{props.image_url};

const SandwichTile = (props) => (
  <div className="sandwich-tile">
    <h3>{props.name}</h3>
    <h3>{props.description}</h3>
    <img src={props.image_url} />
  </div>
)

export default SandwichTile
