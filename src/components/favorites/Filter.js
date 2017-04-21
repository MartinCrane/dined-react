import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'
import { ButtonToolbar, ButtonGroup, Button, DropdownButton, MenuItem, Col } from 'react-bootstrap';


export class Filter extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render(){
    const filterInterface = <ButtonGroup justified>
                              <Button href="#">$</Button>
                              <Button href="#">$$</Button>
                              <Button href="#">$$$</Button>
                              <Button href="#">$$$$</Button>
                              <Button href="#">A</Button>
                              <Button href="#">B</Button>
                              <Button href="#">C</Button>
                              <Button href="#">D</Button>
                              <DropdownButton title="Dropdown" id="bg-justified-dropdown">
                                <MenuItem eventKey="1">Dropdown link</MenuItem>
                                <MenuItem eventKey="2">Dropdown link</MenuItem>
                              </DropdownButton>
                            </ButtonGroup>
    return(
        <div>
        {filterInterface}
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    favorites: state.favorites.restaurants
  }
}

export const ConnectedFilter = connect(mapStateToProps)(Filter)
