import React, { Component } from 'react';

export class RestaurantCard extends Component {
  render(){
    return(
        <div className="restaurantThumb">
          <h1>name: {this.props.restaurant.name}</h1>
          <h1>price: {this.props.restaurant.price} </h1>
          <h1>address: {this.props.restaurant.address} </h1>
        </div>
    )
  }
}
