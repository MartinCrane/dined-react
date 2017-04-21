import { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react';
import { setLocation } from '../../actions/setLocation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SimpleMap } from '../map/Map'
import $ from 'jquery'

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
      button: 'stop'
    }
    this.spin = this.spin.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }


  spin(){
    $(".roller ul").css('animation', 'scroll-numbers 0.5s linear infinite');
    $(".stop").text("Stop").off().on("click", stop);
  }

  pickRandomIndex(){
    return Math.floor(Math.random() * ($(".roller li").length - 1 + 1));
  }

  stop(){
    debugger
    if (this.state.button === 'stop'){
      var randomIndex = this.pickRandomIndex();
      var city = $($(".roller li").get(randomIndex)).text();
      var top = (randomIndex * -2);
      $(".roller ul").css({  "top": top, "animation": "none"  });
      $(".stop").text("Respin").off().on("click", this.spin)

      let randrestaurant = this.props.favorites.filter((res)=> res.name === city)

      let lat = randrestaurant[0].latitude
      let lng = randrestaurant[0].longitude

      this.setState({
        button: 'respin',
        center: {lat: lat, lng: lng}
      })

      debugger
    }else{
      this.setState({
        button: 'stop'
      })
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
    debugger
    const results = this.props.favorites.map((restaurant)=>{
      return <li>{restaurant.name}</li>
    })

 let maps = <div className="map">
              <GoogleMapReact
                    bootstrapURLKeys={{
                               key: 'AIzaSyCjef7cMcrZYQfvEqlTFvvn7VqKTBDoTvE',
                               language: 'en'
                             }}
                     defaultCenter={location}
                     defaultZoom={20}
                   ></GoogleMapReact>
            </div>

let roller = <section className="spinner">
                  <div className="roller">
                    <ul>
                      {results}
                    </ul>
                  </div>
                  <footer>
                    <button className="stop" onClick={(event)=> this.handleClick(event)} >Stop</button>
                  </footer>
              </section>

      return (
        <div>
          <div class="map">{maps}</div>
          <div>{roller}</div>
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
