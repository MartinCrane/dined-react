import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'
import { ButtonToolbar, ButtonGroup, Button, DropdownButton, MenuItem, Col } from 'react-bootstrap';
import { Favorites } from './Favorites'
import { filterFavorites } from '../../actions/filter'

export class Filter extends Component {
  constructor() {
    super()
    this.state = {
      price1: false,
      price2: false,
      price3: false,
      price4: false,
      userCategoryA: false,
      userCategoryB: false,
      userCategoryC: false,
      userCategoryD: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(field) {
    this.setState({
      [field]: !this.state[field]
   });
  }

  render(){
    const filterInterface = <ButtonGroup justified>
     <Button bsStyle={this.state.price1 ? 'primary' : null}
             href="#"
             onClick={this.handleClick.bind(null, "price1")}>$</Button>
     <Button bsStyle={this.state.price2 ? 'primary' : null}
             href="#"
             onClick={this.handleClick.bind(null, "price2")}>$$</Button>
     <Button bsStyle={this.state.price3 ? 'primary' : null}
             href="#"
             onClick={this.handleClick.bind(null, "price3")}>$$$</Button>
     <Button bsStyle={this.state.price4 ? 'primary' : null}
             href="#"
             onClick={this.handleClick.bind(null, "price4")}>$$$$</Button>
     <Button bsStyle={this.state.userCategoryA ? 'primary' : null}
             href="#"
             onClick={this.handleClick.bind(null, "userCategoryA")}>A</Button>
     <Button bsStyle={this.state.userCategoryB ? 'primary' : null}
             href="#"
             onClick={this.handleClick.bind(null, "userCategoryB")}>B</Button>
     <Button bsStyle={this.state.userCategoryC ? 'primary' : null}
             href="#"
             onClick={this.handleClick.bind(null, "userCategoryC")}>C</Button>
     <Button bsStyle={this.state.userCategoryD ? 'primary' : null}
             href="#"
             onClick={this.handleClick.bind(null, "userCategoryD")}>D</Button>
                              <DropdownButton title="Dropdown" id="bg-justified-dropdown">
                                <MenuItem eventKey="1">Dropdown link</MenuItem>
                                <MenuItem eventKey="2">Dropdown link</MenuItem>
                              </DropdownButton>
                            </ButtonGroup>
    return(
      <div>
        <div>
        {filterInterface}
        </div>
        <div>
          <Favorites favorites={filterFavorites(this.state, this.props.favorites)}/>
        </div>
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
