import React, { Component } from 'react';


export class Search extends Component {

  constructor(){
    super()
    this.state = {
      name: 'start',
      zip: '',
      results: [],
    };
  }

  handleOnZipChange(event) {
    this.setState({
      zip: event.target.value
    });
  }

  getRestaurantsZip(event) {
    event.preventDefault()
    fetch(`http://localhost:4000/zip_view/${this.state.zip}`, {
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
    let displaySelectedZip = this.state.results.map((rest) => <li>{rest.name}</li>)

    return(
        <div className="">
          <input
            type="text"
            onChange={(event) => this.handleOnZipChange(event)}
            placeholder="zipcode"
            value={this.state.zip} />
          <button onClick={event => this.getRestaurantsZip(event)}>API SEARCH</button>
          <h1>{this.state.name}</h1>
          <ul>
            {displaySelectedZip}
          </ul>
        </div>

    )
  }
}
