import { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react';
import { setLocation } from '../../actions/setLocation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ButtonToolbar, ButtonGroup, Button, Col, Row, Popover } from 'react-bootstrap';
import { LoadScreen } from '../panels/Loading'
import MapTick from './MapTick'
import MapMarkers from './mapMarkers.js';
import {K_SIZE} from './my_great_place_with_hover_styles';


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

          //Uncomment above to move from loading screen
        },
        (error) => console.log(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )}


  render() {

    let loadingComponent =
                      <Row>
                        <Col sm={2} md={2}></Col>
                        <Col sm={8} md={8} smOffset={4}>
                          <h1> Fetching Cool Stuff </h1>
                          <LoadScreen />
                        </Col>
                        <Col sm={2} md={2}></Col>
                      </Row>



    let markers = []

    this.props.favorites.forEach((rest, index) => {
      markers.push(<MapMarkers key={rest.id} lat={rest.latitude} lng={rest.longitude} text={rest.name}/> )
    });

    let geoLocationReady

      if(!!(this.state.center.lat && this.state.center.lng)){
        geoLocationReady =
                    <Row>
                     <Col sm={2} md={2}></Col>
                     <Col sm={8} md={8} offset={3}>
                       <div className="map">
                          <GoogleMapReact
                            bootstrapURLKeys={{
                              key: 'AIzaSyCjef7cMcrZYQfvEqlTFvvn7VqKTBDoTvE',
                              language: 'en'
                            }}
                            defaultCenter={this.state.center}
                            defaultZoom={this.state.zoom}
                            hoverDistance={K_SIZE / 2}
                            >
                            {markers}
                            <MapMarkers lat={this.state.center.lat} lng={this.state.center.lng} text={`You are here`} />
                          </GoogleMapReact>
                          </div>
                        </Col>
                        <Col sm={2} md={2}></Col>
                      </Row>

      }else{
        geoLocationReady = loadingComponent
      }

    return (
      <div>
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
