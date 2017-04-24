import React, { Component } from 'react';
import {greatPlaceStyle, greatPlaceStyleHover} from './my_great_place_with_hover_styles.js';
//* import hover styes .css here

export default class MapMarkers extends Component {
  constructor(props){
    super(props)
    this.$hover = this.props.$hover
    this.text = this.props.text
  }

  render(){
    const style=this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle

    return (
      <div className="mapMarkers" style={style}>
        <img src={this.props.img} alt={this.props.text}/>

      </div>
    )
  }
}
