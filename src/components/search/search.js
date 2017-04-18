import React, { Component } from 'react';
import axios from 'axios'

export class Search extends Component {

  getRestaurantsZip(event) {
    event.preventDefault()

    axios(`http://localhost:4000/zip_view/2`, {
    method: 'post',
    headers: {
      Authorization: localStorage.jwt,
      }
    }).then(res => {
    })
  }
  
  render(){
    return(
        <div className="">
          <button onClick={event => this.getRestaurantsZip(event)}>API SEARCH</button>
        </div>
    )
  }
}
