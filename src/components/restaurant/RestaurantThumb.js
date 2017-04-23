import React, { Component } from 'react';
import { Button, Collapse, Well, Image, ButtonToolbar } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../../actions/favorites'
import { price_function } from '../../actions/restaurant'
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
    this.props.removeFromDisplay(this.props.restaurant.yelp_id)

  }

  render(){
    let title = <div>
                  <h1><b>{this.props.restaurant.name}</b></h1>
                  <h2>Price Range: {price_function(this.props.restaurant.price)}</h2>
                  <h3>{this.props.restaurant.address} </h3>
                  <h3>Rating: {this.props.restaurant.rating}</h3>
                </div>

    let details = <div>
                    <Collapse in={this.state.open}>
                      <div>
                        <Button className="buttonMain" bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>{this.props.action}</Button>
                        <Image src={this.props.restaurant.image_url} responsive />
                      </div>
                    </Collapse>
                  </div>

    let action = <Button className="buttonMain" bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>{this.props.action}</Button>

    return(
      <div className="restaurantThumb" >
          {title}
          <br></br>
          <ButtonToolbar>
    
            <Button className="buttonMain" bsStyle="primary" bsSize="xsmall" onClick={ () => this.setState({ open: !this.state.open })}>
              {this.state.open ? 'Less Details' : 'More Details'}
            </Button>

          </ButtonToolbar>
          <br></br>
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
