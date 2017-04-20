import React, { Component } from 'react';
import { RestaurantCard } from './RestaurantCard'
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addToFavorites } from '../../actions/favorites'
import { updateFavoritesServer } from '../../actions/favorites'


export class RestaurantThumb extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    updateFavoritesServer(this.props.restaurant)
    this.props.addToFavorites(this.props.restaurant)
  }

  render(){
    let details = <div><p>{this.props.restaurant.name} /
                  {this.props.restaurant.price} /
                  {this.props.restaurant.address} </p>
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
    addToFavorites: addToFavorites
  }, dispatch)
}
const mapStateToProps = (state)=>{
  return{
    login: state.account.login
  }
}

export const ConnectedRestaurantThumb = connect(mapStateToProps,mapDispatchToProps)(RestaurantThumb)
