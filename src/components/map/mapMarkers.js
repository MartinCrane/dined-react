import React, { Component } from 'react';
import {greatPlaceStyle, greatPlaceStyleHover} from './my_great_place_with_hover_styles.js';
import { Popover } from 'react-bootstrap';
//* import hover styes .css here

export default class MapMarkers extends Component {
  constructor(props){
    super(props)
    this.$hover = this.props.$hover
    this.text = this.props.text
  }

  render(){

    const popoverComponent =
              <div style={{ height: 50, width: 100 }}>
                  <Popover
                    id="popover-basic"
                    placement="right"
                    positionLeft={0}
                    positionTop={-95}
                    title={this.props.text}
                  >
                    <div>Price: {this.props.price}</div>
                    <div>Rating: {this.props.rating}</div>
                    <div>Address: {this.props.address}</div>
                  </Popover>
            </div>

    const imgComponent = <img src={this.props.img} alt={this.props.text}/>

    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle
    const popover = this.props.$hover ? popoverComponent : imgComponent

    return (
      <div className="mapMarkers" style={style}>
        {popover}
      </div>
    )
  }
}
