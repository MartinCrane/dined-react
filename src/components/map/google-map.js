import React from 'react'
import GoogleMapReact from 'google-map-react'

class GoogleMap extends React.Component {
  render() {
    let markers = []
    let zoom = 14;
    let lat = 37.774929;
    let lng = -122.419416;

    debugger

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
