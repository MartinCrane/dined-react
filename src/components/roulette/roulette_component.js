import React, { Component } from 'react';


export class Roulette extends Component {

  constructor(){
    super()
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(field, evt) {
    this.setState({
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
        </div>

    )
  }
}
