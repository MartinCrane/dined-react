import { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react';
import { setLocation } from '../../actions/setLocation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const MarkerComponent = ({ text }) => <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>

export class SimpleMap extends Component {
  constructor(){
    super()
    this.state = {
      center: {lat: null, lng: null},
      zoom: 13
    }
  }

  componentWillMount() {
      navigator.geolocation.getCurrentPosition((position) => {
          var geoCenter = {center: {lat: position.coords.latitude, lng: position.coords.longitude}};
          this.props.setLocation(geoCenter)
          this.setState(geoCenter)
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )}


  render() {

    let markers = []

    this.props.favorites.forEach((rest, index) => {
      markers.push(<MarkerComponent key={index} lat={rest.latitude} lng={rest.longitude} /> )
    });

    let geoLocationReady

      if(!!(this.state.center.lat && this.state.center.lng)){
        geoLocationReady = <GoogleMapReact
                            bootstrapURLKeys={{
                              key: 'AIzaSyCjef7cMcrZYQfvEqlTFvvn7VqKTBDoTvE',
                              language: 'en'
                            }}
                            defaultCenter={this.state.center}
                            defaultZoom={this.state.zoom}
                            >
                            {markers}
                          </GoogleMapReact>
      }else{
        geoLocationReady = <h1>`Loading Map...`</h1>
      }

    return (
      <div className="map">
      {geoLocationReady}
      </div>
    )
  }

}


  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      setLocation: setLocation
    }, dispatch)
  }

  const mapStateToProps = (state) =>{
    return{
      center: state.map.center,
      favorites: state.favorites.restaurants
    }
  }

  export const ConnectedMap = connect(mapStateToProps,mapDispatchToProps)(SimpleMap)
