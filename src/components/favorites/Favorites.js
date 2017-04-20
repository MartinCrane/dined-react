import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'
import { Col } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';

export class Favorites extends Component {

  render(){

    let restaurantThumbList = this.props.favorites.map((restaurant, index) =>
          <Col sm={4} md={4}><ConnectedRestaurantThumb key={index} restaurant={restaurant} action={"Remove from Favorites"}/></Col>)

    return(
        <div>
          <h1>Favorites</h1>
          {restaurantThumbList}
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    favorites: state.favorites.restaurants
  }
}

export const ConnectedFavorites = connect(mapStateToProps)(Favorites)
