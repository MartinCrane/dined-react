import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'

export class Favorites extends Component {

  render(){
    let restaurantThumbList = this.props.favorites.map((restaurant, index) =>
            <ConnectedRestaurantThumb key={index} restaurant={restaurant} />)
    return(
        <div >
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
