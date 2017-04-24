import React, { Component } from 'react';
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeFromResults } from '../../actions/search'
import { ConnectedSearchRestaurantThumb } from '../restaurant/SearchRestaurantThumb'

export class Results extends Component {
  constructor(){
    super()
    this.removeFromDisplay = this.removeFromDisplay.bind(this)
  }

  removeFromDisplay(id) {
    removeFromResults(id)
  }

  render(){
    let restaurantThumbList
    if (this.props.search.length > 0 ) {
        restaurantThumbList = this.props.search.map((restaurant, index) =>
                            <ConnectedSearchRestaurantThumb key={index}
                                                            restaurant={restaurant}
                                                            action={"Add to Favorites"}
                                                            removeFromDisplay={this.removeFromDisplay}/>)
    }

    return(
        <div className="resultsContainer">
          {this.props.search.length > 1 ? restaurantThumbList : null}
        </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeFromResults: removeFromResults
  }, dispatch)
}

export const ConnectedResults = connect(mapStateToProps, mapDispatchToProps)(Results)
