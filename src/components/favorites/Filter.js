import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedRestaurantThumb } from '../restaurant/RestaurantThumb'
import { ButtonToolbar, ButtonGroup, Button, Col, Row, Popover } from 'react-bootstrap';
import { Favorites } from './Favorites'
import MapTick  from '../map/MapTick'
import { filterFavorites } from '../../actions/filter'
import  GoogleMapReact  from 'google-map-react';
import { StickyContainer, Sticky } from 'react-sticky';

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


  const hoverStyle = {
                  position: 'fixed',

                }

  const restComponents = filterFavorites(this.state, this.props.favorites).map((fav, index) => {<MapTick name={fav.name}
                                                                                                          lat={fav.latitude}
                                                                                                          lng={fav.longitude}
                                                                                                          key={index}/>})

  const googleMapTray =  <div>
                            <Row>
                             <Col sm={6} md={6}>
                               <div className="filterMap">
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
                           </Row>
                           <Row>
                           </Row>
                          </div>



    return(
      <div>
        <Sticky className="filterBarStyle" stickyClassName={'filterBarSticky'}>
          <Row >
            <ButtonGroup justified >
              <Button className='bFilter' style={this.state.price1 ? {background:'#69B7EF'} : null}
                href="#"
                onClick={this.handleClick.bind(null, "price1")}>$</Button>
              <Button className='bFilter' style={this.state.price2 ? {background:'#69B7EF'} : null}
                href="#"
                onClick={this.handleClick.bind(null, "price2")}>$$</Button>
              <Button className='bFilter' style={this.state.price3 ? {background:'#69B7EF'} : null}
                href="#"
                onClick={this.handleClick.bind(null, "price3")}>$$$</Button>
              <Button className='bFilter' style={this.state.price4 ? {background:'#69B7EF'} : null}
                href="#"
                onClick={this.handleClick.bind(null, "price4")}>$$$$</Button>
              <Button className='bFilter' style={this.state.mapUse ? {background:'#69B7EF'} : null}
                href="#"
                onClick={this.openMapTray}>Map Filter</Button>
            </ButtonGroup>

          </Row>

        </Sticky>
        <div>
            {this.state.mapUse ? googleMapTray : null }
          <Row>
            {this.state.mapUse ? <Favorites favorites={filterFavorites(this.state, this.props.favorites)}/> : null }
          </Row>
        </div>

        <div style={{zIndex:'1'}}>
          {this.state.mapUse ? null : <Favorites favorites={filterFavorites(this.state, this.props.favorites)}/> }
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
