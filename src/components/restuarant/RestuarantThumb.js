import React, { Component } from 'react';

export class RestuarantThumb extends Component {
  render(){
    return(
        <div className="restuarantThumb">
          <h1>name: {this.props.restuarant.name}</h1>
          <h1>price: {this.props.restuarant.price} </h1>
          <h1>address: {this.props.restuarant.address} </h1>
        </div>
    )
  }
}
