import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Component } from 'react'

class GoogleMap extends Component {
  render() {
    let markers = []
    let zoom = 14;
    let lat = 37.774929;
    let lng = -122.419416;


    return(
      <GoogleMapReact bootstrapURLKeys={{
        key: 'AIzaSyCjef7cMcrZYQfvEqlTFvvn7VqKTBDoTvE',
        language: 'en'
        }}
      defaultCenter={[lat, lng]}
      defaultZoom={zoom}>
      </GoogleMapReact>
  )
}
}

export default GoogleMap
