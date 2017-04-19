import React, { Component } from 'react';
import { RestaurantCard } from './RestaurantCard'

export class RestaurantThumb extends Component {
  constructor(props){
    super(props);

    this.state = {
      restaurantCard: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    debugger
    let change = !this.state.restaurantCard
    this.setState({
      restaurantCard: change
    })
  }

  render(){

    let details = <div><h1>name: {this.props.restaurant.name}</h1>
                  <h1>price: {this.props.restaurant.price} </h1>
                  <h1>address: {this.props.restaurant.address} </h1>
                  <button onClick={(event) => this.handleClick(event)}>Add to Favorites</button>
                  </div>

    return(
      <div className="restaurantThumb" >
          {details}
      </div>
    )
  }
}
