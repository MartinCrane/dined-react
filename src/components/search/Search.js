import React, { Component } from 'react';
import { Results } from './Results'


export class Search extends Component {

  constructor(){
    super()
    this.state = {
      name: 'start',
      field: '',
      results: [],
    };
  }

  handleOnFieldChange(event) {
    this.setState({
      field: event.target.value
    });
  }

  getRestaurantsZip(event) {
    event.preventDefault()
    fetch(`http://localhost:4000/zip_view/${this.state.field}`, {
    method: 'post',
    headers: {
      Authorization: `${localStorage.jwt}`,
    }
  }).then(res => res.json()).
    then(res => {
      this.setState({
        results: res
      })
    })
  }

  render(){
    let displaySelectedField = this.state.results.map((rest) => <li>{rest.name}</li>)

    return(
        <div className="restuarantCard">
          <input
            type="text"
            onChange={(event) => this.handleOnFieldChange(event)}
            placeholder="Field"
            value={this.state.field} />
          <button onClick={event => this.getRestaurantsZip(event)}>API SEARCH</button>

          <Results results={this.state.results} />

        </div>

    )
  }
}
