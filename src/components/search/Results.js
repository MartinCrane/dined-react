import React, { Component } from 'react';
import { ConnectedSearchRestaurantThumb } from '../restaurant/SearchRestaurantThumb'

export class Results extends Component {

  constructor(){
    super()
    this.state = {
    };
  }
  render(){

    let restaurantThumbList = this.props.results.map((restaurant, index) =>
            <ConnectedSearchRestaurantThumb key={index}
                                      restaurant={restaurant}
                                      action={"Add to Favorites"}
                                      removeFromDisplay={this.props.removeFromDisplay}/>
                                    )


    return(
        <div className="resultsContainer">
          {restaurantThumbList}
        </div>
    )
  }
}
