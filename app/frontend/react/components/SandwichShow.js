import React, { Component } from 'react';
import SandwichTile from './SandwichTile';

class SandwichShow extends Component {
 constructor(props) {
   super(props);
   this.state = {
     sandwich: {}
   };
 };

 componentDidMount() {
   let sandwichID = this.props.match.params.id;
   fetch(`/api/v1/sandwiches/${sandwichID}`, {
     credentials: 'same-origin',
     method: 'GET',
     headers: {'Content-Type': 'application/json'}
   })
     .then((response) => response.json())
     .then((body) => {
       this.setState({
         sandwich: body.sandwich
       });
     })
     .catch(function(error){
       console.log(error);
     });
 };

 render() {
   const sandwich = this.state.sandwich;
   return(
     <SandwichTile
       key={sandwich.id}
       id={sandwich.id}
       name={sandwich.name}
       description={sandwich.description}
       image_url={sandwich.image_url}
     />
   );
 };
};

export default SandwichShow;
