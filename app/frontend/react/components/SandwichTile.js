import React from 'react'

const SandwichTile = (props) => (
  <div className="sandwich-tile">
    <h3>{props.name}</h3>
    <h3>{props.description}</h3>
    <h3>{props.image_url}</h3>
  </div>)


export default SandwichTile
