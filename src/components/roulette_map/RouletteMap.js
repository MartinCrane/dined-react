import { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react';
import { setLocation } from '../../actions/setLocation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SimpleMap } from '../map/Map'
import $ from 'jquery'
import MapMarkers  from '../map/mapMarkers'


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
    const location = this.state.center.lat===null? this.props.center : this.state.center

    const results = this.props.favorites.map((restaurant)=>{
      return <li>{restaurant.name}</li>
    });

    let randRestaurant = []
      if(this.state.randrestaurant){
        randRestaurant.push(<MapMarkers index={0}
          text={this.state.randrestaurant[0].name}
          lat={this.state.randrestaurant[0].latitude}
          lng={this.state.randrestaurant[0].longitude}
          price={this.state.randrestaurant[0].price}
          rating={this.state.randrestaurant[0].rating}
          address={this.state.randrestaurant[0].address}
          img={require('../map/web/assets/icons/map_icons/map_icon_std_orange.svg')}
          />)
      }else{
        this.props.favorites.map((res, index)=>{
          randRestaurant.push(<MapMarkers text={res.name}
                    lat={res.latitude}
                    lng={res.longitude}
                    key={index}
                    price={res.price}
                    rating={res.rating}
                    address={res.address}
                    img={require('../map/web/assets/icons/map_icons/map_icon_std_orange.svg')}
                    />
                  )
        })
      }

   let maps = <div className="rouletteMap">
                 <GoogleMapReact
                   bootstrapURLKeys={{
                   key: 'AIzaSyCjef7cMcrZYQfvEqlTFvvn7VqKTBDoTvE',
                   language: 'en'
                   }}
                   defaultCenter={this.props.center}
                   center={location}
                   defaultZoom={this.state.zoom}
                   zoom={this.state.zoom}
                  >
                  {randRestaurant}
                 </GoogleMapReact>
               </div>



    let roller =   <section className="spinner">
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
          <div stye={{paddingLeft: 3}}>
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
