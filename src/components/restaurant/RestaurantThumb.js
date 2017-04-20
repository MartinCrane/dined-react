import React, { Component } from 'react';
import { RestaurantCard } from './RestaurantCard'
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../actions/favorites'
import { updateAddFavoritesServer, updateDeleteFavoritesServer } from '../../actions/favorites'



export class RestaurantThumb extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if (this.props.action === "Add to Favorites") {
      updateAddFavoritesServer(this.props.restaurant)
      this.props.addToFavorites(this.props.restaurant)
    } else {
      updateDeleteFavoritesServer(this.props.restaurant)
      this.props.removeFromFavorites(this.props.restaurant)
    }
  }

  render(){
    let details = <div><p>{this.props.restaurant.name} /
                  {this.props.restaurant.price} /
                  {this.props.restaurant.address} </p>
                <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>{this.props.action}</Button>
                  </div>
    return(
      <div className="restaurantThumb" >
          {details}
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addToFavorites: addToFavorites,
    removeFromFavorites: removeFromFavorites
  }, dispatch)
}


export const ConnectedRestaurantThumb = connect(null,mapDispatchToProps)(RestaurantThumb)
