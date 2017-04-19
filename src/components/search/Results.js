import React, { Component } from 'react';
import { RestuarantThumb } from '../restuarant/RestuarantThumb'

export class Results extends Component {

  constructor(){
    super()
    this.state = {
    };
  }

  render(){
    let restuarantThumbList = this.props.results.map((restuarant, index) =>
                                <RestuarantThumb key={index} restuarant = {restuarant} />)
                              
    return(
        <div className="resultsContainer">
          {restuarantThumbList}
        </div>

    )
  }
}
