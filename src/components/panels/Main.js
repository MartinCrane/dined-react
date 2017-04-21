import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { ConnectedSearch } from '../../components/search/Search'
import { ConnectedFilter } from '../../components/favorites/Filter'
import { ConnectedMap } from '../map/Map'


export class Main extends Component {

  render() {

    let search = <Col sm={6} md={6} ><ConnectedSearch/></Col>
    let favorites = <Col ><ConnectedFilter/></Col>
    let map = <ConnectedMap />

  return (
      <Row className="container">
        <Row className="container">
          <h1 className="text-center">{this.props.navigation}</h1>
        </Row>
        <Row className="container-flex">
          {this.props.navigation === "search" ? search : null}
          {this.props.navigation === "favorites" ? favorites : null}
        </Row>
        <Row className="map">
          {this.props.navigation === "map" ? map : null}
        </Row>
      </Row>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    navigation: state.navigation,
  }
}

export const ConnectedMain = connect(mapStateToProps)(Main)
