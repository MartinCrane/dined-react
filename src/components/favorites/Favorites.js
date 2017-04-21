import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'
import { Col } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { ConnectedFilter } from './Filter'

export class Favorites extends Component {
    removeFromDisplay() {
        return
    }
  render(){
    let restaurantThumbList = this.props.favorites.map((restaurant, index) =>
          <Col sm={4} md={4}><ConnectedRestaurantThumb key={index}
                                                       restaurant={restaurant}
                                                       action={"Remove from Favorites"}
                                                       removeFromDisplay = {this.removeFromDisplay}/>
                                                       </Col>)

    return(
        <div>
          <ConnectedFilter/>
          <div>
          {restaurantThumbList}
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    favorites: state.favorites.restaurants,
    center: state.map.center,
  }
}

export const ConnectedFavorites = connect(mapStateToProps)(Favorites)
