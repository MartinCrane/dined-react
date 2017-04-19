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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
   });
 }


  handleSubmit(event) {
    event.preventDefault()
    return fetch(`http://localhost:4000/zip_view/${this.state.field}`, {
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

    return(
        <div className="form">
          <form onSubmit={event => this.handleSubmit(event)}>
            <h1>Search</h1>
              <input
                type="text"
                onChange={this.handleChange.bind(null, "field")}
                placeholder="Field"
                value={this.state.field} />

          <input type="submit" />
        </form>
          <Results results={this.state.results} />
        </div>

    )
  }
}
