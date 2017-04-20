import { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyCjef7cMcrZYQfvEqlTFvvn7VqKTBDoTvE',
            language: 'en'
          }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
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


//
//
// export class Map extends Component {
//   // constructor() {
//   //   super()
//   //   this.state = {
//   //     lat: null,
//   //     long:null,
//   //     zoom: 16,
//   //     wifis: []
//   //   }
//   // }
//   // componentWillMount(){
//   //   navigator.geolocation.getCurrentPosition((position) => {
//   //     this.setState({
//   //       lat: position.coords.latitude,
//   //       long: position.coords.longitude
//   //     })
//   //   })
//   // }
//
//   componentDidMount(){
//     this.loadMap()
//   }
//
//   loadMap() {
//     debugger
//     if (this.props && this.props.google) {
//       const {google} = this.props;
//       const maps = google.maps;
//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef);
//
//       let zoom = 14;
//       let lat = 37.774929;
//       let lng = -122.419416;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign({}, {
//         center: center,
//         zoom: zoom
//       })
//       this.map = new maps.Map(node, mapConfig)
//     }
//
//   }
//
//     render() {
//       return(
//           <div ref='map'>
//             Loading map . . .
//           </div>
//       )
//     }
//
//
// }
