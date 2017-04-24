import React, { Component } from 'react';
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeFromResults } from '../../actions/search'


export class Results extends Component {
  constructor(){
    super()
    this.removeFromDisplay = this.removeFromDisplay.bind(this)
  }

  removeFromDisplay(id) {
    removeFromResults(id)
  }

  render(){
    let restaurantThumbList = this.props.results.map((restaurant, index) =>
            <ConnectedRestaurantThumb key={index}
                                      restaurant={restaurant}
                                      action={"Add to Favorites"}
                                      removeFromDisplay={this.removeFromDisplay}/>)

    return(
        <div className="resultsContainer">
          {restaurantThumbList}
        </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    results: state.favorites.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeFromResults: removeFromResults
  }, dispatch)
}

export const ConnectedResults = connect(mapStateToProps, mapDispatchToProps)(Results)
