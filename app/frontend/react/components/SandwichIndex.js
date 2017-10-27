import React, { Component } from 'react';
import SandwichTile from './SandwichTile';
import {Link} from 'react-router-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { ButtonGroup, Button } from 'react-bootstrap';

class SandwichIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sandwichData: []
    };
  }

  componentWillMount() {
    fetch('/api/v1/sandwiches.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json() )
      .then((body) => {
        this.setState({ sandwichData: body.sandwiches});
      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {
    let sandwiches = this.state.sandwichData.map((sandwich) => {
      return(
        <div key={sandwich.id} className='card mb-3 w-25' style={{margin: '1em'}}>
          <a href={`/sandwiches/${sandwich.id}`}>
            <img className="card-img-top" src={sandwich.image_url} />
          </a>
          <div className='card-block align-middle'>
            <h3 className="mt-2 text-center text-capitalize card-title ">{sandwich.name}</h3>
          </div>
        </div>
      );
    });

    const buttonStyle = {
        margin: '10px'
    };

    return(
      <div>
        <div>
          <ButtonGroup vertical block>
            <Button href={`/sandwiches/new`} bsStyle="primary" bsSize="large">Add a Sandwich</Button>
          </ButtonGroup>
        </div>
        <Grid>
          <Row>
            {sandwiches}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SandwichIndex;
