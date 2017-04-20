import React, { Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';
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

  render(){
    let title = <div><h1>{this.props.restaurant.name} /
                {this.props.restaurant.price} /
                {this.props.restaurant.address} </h1>
                </div>

    let details = <div>
                    <Button bsStyle="primary" bsSize="xsmall" onClick={ ()=> this.setState({ open: !this.state.open })}>
                      {this.state.open ? 'Less Details' : 'More Details'}
                    </Button>
                      <Collapse in={this.state.open}>
                        <div>
                          <h2>{this.props.restaurant.name}</h2>
                          <h2>{this.props.restaurant.address}</h2>
                          <h2>{this.props.restaurant.price}</h2>
                          <h2>{this.props.restaurant.rating}</h2>
                          <img src={this.props.restaurant.image_url} />
                        </div>

                      </Collapse>
                  </div>

    return(
      <div className="restaurantThumb" >
          {title}
          <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>{this.props.action}</Button>
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
