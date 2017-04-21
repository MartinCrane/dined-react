import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'
import { ButtonToolbar, ButtonGroup, Button, Col, Row, Popover } from 'react-bootstrap';
import { Favorites } from './Favorites'
import MapTick  from '../map/MapTick'
import { filterFavorites } from '../../actions/filter'
import  GoogleMapReact  from 'google-map-react';

export class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price1: false,
      price2: false,
      price3: false,
      price4: false,
      userCategoryA: false,
      userCategoryB: false,
      userCategoryC: false,
      userCategoryD: false,
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 13,
      nLat: null,
      sLat: null,
      wLng: null,
      eLng: null,
      mapUse: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.mapBounds = this.mapBounds.bind(this)
    this.openMapTray = this.openMapTray.bind(this)
  }

  handleClick(field) {
    this.setState({
      [field]: !this.state[field]
   });
  }

  mapBounds(event){
    this.setState({
      nLat: event.bounds.ne.lat,
      sLat: event.bounds.sw.lat,
      wLng: event.bounds.sw.lng,
      eLng: event.bounds.se.lng,
    })
  }

  openMapTray(event){
    console.log(!this.state.mapUse)
    this.setState({
      mapUse: !this.state.mapUse
    })
  }

  render(){
    const filterInterface = <Row>
                              <Col sm={2} md={2}></Col>
                              <Col sm={8} md={8}><ButtonGroup justified>
                                 <Button bsStyle={this.state.price1 ? 'primary' : null}
                                         href="#"
                                         onClick={this.handleClick.bind(null, "price1")}>$</Button>
                                 <Button bsStyle={this.state.price2 ? 'primary' : null}
                                         href="#"
                                         onClick={this.handleClick.bind(null, "price2")}>$$</Button>
                                 <Button bsStyle={this.state.price3 ? 'primary' : null}
                                         href="#"
                                         onClick={this.handleClick.bind(null, "price3")}>$$$</Button>
                                 <Button bsStyle={this.state.price4 ? 'primary' : null}
                                         href="#"
                                         onClick={this.handleClick.bind(null, "price4")}>$$$$</Button>
                                 <Button bsStyle={this.state.mapUse ? 'primary' : null}
                                         href="#"
                                         onClick={this.openMapTray}>Map Filter</Button>
                                 </ButtonGroup></Col>
                             <Col sm={2} md={2}></Col>
                            </Row>

  const restComponents = filterFavorites(this.state, this.props.favorites).map((fav, index) => {<MapTick name={fav.name}
                                                                                                          lat={fav.latitude}
                                                                                                          lng={fav.longitude}
                                                                                                          key={index}/>})

  const googleMapTray =  <Row>
                           <Col sm={2} md={2}></Col>
                           <Col sm={8} md={8}>
                             <div className="map">
                             <GoogleMapReact
                               defaultCenter={this.state.center}
                               onChange={event => this.mapBounds(event)}
                               defaultZoom={this.state.zoom}
                               bootstrapURLKeys={{
                                 key: 'AIzaSyCjef7cMcrZYQfvEqlTFvvn7VqKTBDoTvE',
                                 language: 'en'
                               }}>
                               {filterFavorites(this.state, this.props.favorites).map((fav, index) => <MapTick name={fav.name}
                               lat={fav.latitude}
                               lng={fav.longitude}
                               key={index}/>)}

                             </GoogleMapReact>
                             </div>
                           </Col>
                           <Col sm={2} md={2}></Col>
                         </Row>


    return(
      <div>
        <div>
        {filterInterface}
        </div>
        {this.state.mapUse ? googleMapTray : null }
        <div>
          <Favorites favorites={filterFavorites(this.state, this.props.favorites)}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    favorites: state.favorites.restaurants,
    lat: state.map.center.lat,
    lng: state.map.center.lng
  }
}

export const ConnectedFilter = connect(mapStateToProps)(Filter)
