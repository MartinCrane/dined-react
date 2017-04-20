import React, { Component } from 'react';
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'

export class Results extends Component {

  constructor(){
    super()
    this.state = {
    };
  }

  render(){
    let restaurantThumbList=this.props.results.map((restaurant, index) =>
            <ConnectedRestaurantThumb key={index} restaurant={restaurant} />)

    return(
        <div className="resultsContainer">
          {restaurantThumbList}
        </div>

    )
  }
}
