import { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react';
import { setLocation } from '../../actions/setLocation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SimpleMap } from '../map/Map'
import $ from 'jquery'
import { ButtonToolbar, ButtonGroup, Button, Col, Row, Popover } from 'react-bootstrap';
import MapTick  from '../map/MapTick'


const MarkerComponent = ({ text }) => <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>


export class RouletteMap extends Component {
  constructor(){
    super()
    this.state = {
      center: {lat: null, lng: null},
      zoom: 13,
      button: 'stop',
      randrestaurant: null
    }
    this.spin = this.spin.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.stop = this.stop.bind(this)
  }


  spin(){
    $(".roller ul").css('animation', 'scroll-numbers 1s linear infinite');
    $(".stop").text("Stop").off().on("click", stop);
  }

  pickRandomIndex(){
    return Math.floor(Math.random() * ($(".roller li").length - 1 + 1));
  }

  stop(){
    if (this.state.button === 'stop'){
      var randomIndex = this.pickRandomIndex();
      var city = $($(".roller li").get(randomIndex)).text();
      var top = (randomIndex * -2);
      $(".roller ul").css({  "top": top+"em", "animation": "none"  });
      $(".stop").text("Respin").off().on("click", this.spin)

      let randrestaurant = this.props.favorites.filter((res)=> res.name === city)

      let lat = randrestaurant[0].latitude
      let lng = randrestaurant[0].longitude
      this.setState({
        button: 'respin',
        center: {lat: lat, lng: lng},
        randrestaurant: randrestaurant,
        zoom: 15
      })

    }else{
      this.setState({
        button: 'stop'
      })
      self = this
      this.spin()
    }
  }

  componentDidMount(){
    this.spin()
  }

  handleClick(event){
    event.preventDefault()
    this.stop()
  }



  render() {
    debugger
    const location = this.state.center.lat===null? this.props.center : this.state.center

    const results = this.props.favorites.map((restaurant)=>{
      return <li>{restaurant.name}</li>
    });

    let randRestaurant = []
      if(this.state.randrestaurant!==null){
        debugger
        randRestaurant.push(<MarkerComponent name={this.state.randrestaurant[0].name}
          lat={this.state.randrestaurant[0].latitude}
          lng={this.state.randrestaurant[0].longitude}
          />)
      }

   let maps =
          <Row>
            <Col sm={2} md={2}></Col>
            <Col sm={8} md={8}>
              <div className="map">
              <GoogleMapReact
                bootstrapURLKeys={{
                key: 'AIzaSyCjef7cMcrZYQfvEqlTFvvn7VqKTBDoTvE',
                language: 'en'
                }}
                defaultCenter={this.props.center}
                center={location}
                defaultZoom={18}
                zoom={this.state.zoom}
               >
               {randRestaurant}
              </GoogleMapReact>
              </div>
              </Col>
            <Col sm={2} md={2}></Col>
          </Row>

    let roller =
        <Row>
          <Col sm={2} md={2}></Col>
          <Col sm={8} md={8}>
            <section className="spinner">
            <div className="roller">
              <ul>
                {results}
              </ul>
            </div>
            <footer>
              <button className="stop" onClick={(event)=> this.handleClick(event)} >Stop</button>
            </footer>
            </section>
          </Col>
          <Col sm={2} md={2}></Col>
        </Row>

      return (
          <div>
            <div>
              {maps}
            </div>
            <div>
              {roller}
            </div>
          </div>
      )
  }


}

const mapStateToProps = (state) =>{
  return{
    center: state.map.center,
    favorites: state.favorites.restaurants
  }
}

export const ConnectedRoulette = connect(mapStateToProps)(RouletteMap)
