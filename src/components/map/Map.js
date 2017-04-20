import { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react';
import {Geolocation} from './geolocation'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class SimpleMap extends Component {
  constructor(){
    super()
    this.state = {
      center: {lat: 45.747048, lng: -73.988052},
      zoom: 15
    }
  }


  componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          var geoCenter = {center: {lat: position.coords.latitude, lng: position.coords.longitude}};
          this.setState(geoCenter)
          var self = this
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    }



  render() {
    return (
      <GoogleMapReact
          bootstrapURLKeys={{
            key: 'API_KEY',
            language: 'en'
          }}
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}
