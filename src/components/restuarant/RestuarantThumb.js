import React, { Component } from 'react';
import { RestuarantCard } from './RestuarantCard'

export class RestuarantThumb extends Component {
  constructor(props){
    super(props);

    this.state = {
      restuarantCard: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    
    let change = !this.state.restuarantCard
    this.setState({
      restuarantCard: change
    })
  }

  render(){

    let details = <div><h1>name: {this.props.restuarant.name}</h1>
                  <h1>price: {this.props.restuarant.price} </h1>
                  <h1>address: {this.props.restuarant.address} </h1>
                  <button onClick={(event) => this.handleClick(event)}></button>
                  </div>

    return(
      <div className="restuarantThumb" >
          {details}
      </div>
    )
  }
}
