import React, { Component } from 'react';
import { RestaurantThumb } from '../restaurant/RestaurantThumb'

export class Results extends Component {

  constructor(){
    super()
    this.state = {
    };
  }

  render(){
    let restaurantThumbList = this.props.results.map((restaurant, index) =>
            <RestaurantThumb key={index} restaurant = {restaurant} />)

    return(
        <div className="resultsContainer">
          {restaurantThumbList}
        </div>

    )
  }
}
