import React, { Component } from 'react';
import { Button, Collapse, Well, Image, ButtonToolbar } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../actions/favorites'
import { updateAddFavoritesServer, updateDeleteFavoritesServer } from '../../actions/favorites'

export class RestaurantThumb extends Component {
  constructor(){
    super();
    this.state = {
      open: false
    }
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
  price_function(price){
    switch (price) {
      case price = "":
        return "N/A"
      case price = 1:
        return "$"
      case price = 2:
        return "$$"
      case price = 3:
        return "$$$"
      case price = 4:
        return "$$$$"
      default:
          return "N/A"
    }
  }

  render(){
    let title = <div>
                  <h1>{this.props.restaurant.name}</h1>
                  <h1>Price Range: {this.price_function(this.props.restaurant.price)}</h1>
                  <h1>{this.props.restaurant.address} </h1>
                  <h1>Rating: {this.props.restaurant.rating}</h1>
                </div>

    let details = <div>
                    <br></br>
                      <Collapse in={this.state.open}>
                        <div>
                            <br></br>
                            <Image src={this.props.restaurant.image_url} responsive />
                            <h1>MAP COMPONENT</h1>
                        </div>
                      </Collapse>
                  </div>

    return(
      <div className="restaurantThumb" >
          {title}
          <br></br>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>{this.props.action}</Button>
            <Button bsStyle="primary" bsSize="xsmall" onClick={ () => this.setState({ open: !this.state.open })}>
              {this.state.open ? 'Less Details' : 'More Details'}
            </Button>

          </ButtonToolbar>
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

const mapStateToProps = (state)=>{
  return{
    login: state.account.login
  }
}


export const ConnectedRestaurantThumb = connect(null,mapDispatchToProps)(RestaurantThumb)
