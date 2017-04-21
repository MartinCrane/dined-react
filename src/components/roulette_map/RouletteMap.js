import { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react';
import { setLocation } from '../../actions/setLocation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {SimpleMap} from '../map/Map'
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
      this.setState({
        button: 'respin'
      })
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
    const results = this.props.favorites.map((restaurant)=>{
      return <li>{restaurant.name}</li>
    })

      return (
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