import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'
import { Col } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';


export class Favorites extends Component {

    removeFromDisplay() {
        return
    }

  render(){
    let restaurantThumbList = this.props.favorites.map((restaurant, index) =>
          <Col sm={6} md={6} key={index}><ConnectedRestaurantThumb restaurant={restaurant}
                                                                    action={"Remove from Favorites"}
                                                                    removeFromDisplay = {this.removeFromDisplay}/>
                                                                    </Col>)


    return(
        <div className="resultsContainer">
          {restaurantThumbList}
        </div>
    )
  }
}
