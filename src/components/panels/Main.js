import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { ConnectedSearch } from '../../components/search/Search'
import { ConnectedFavorites } from '../../components/favorites/Favorites'
// import { Map } from '../../components/map/Map'


export class Main extends Component {

  render() {
    let search = <Col sm={6} md={6} ><ConnectedSearch/></Col>
    let favorites = <Col ><ConnectedFavorites/></Col>
    // let map = <Col sm={6} md={6} className="grey"><Map/></Col>

  return (
      <Row className="container">
        <Row className="container">
          <h1 className="text-center">{this.props.navigation}</h1>
        </Row>
        <Row className="container-flex">
          {this.props.navigation === "search" ? search : null}
          {this.props.navigation === "favorites" ? favorites : null}
        </Row>
      </Row>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    navigation: state.navigation
  }
}

export const ConnectedMain = connect(mapStateToProps)(Main)
