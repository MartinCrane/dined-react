import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'
import { ConnectedSearch } from '../../components/search/Search'
import { ConnectedFilter } from '../../components/favorites/Filter'
import { ConnectedNavigation } from '../../components/panels/Navigation'
import { ConnectedMap } from '../map/Map'
import { ConnectedRoulette } from '../roulette_map/RouletteMap'
import { StickyContainer, Sticky } from 'react-sticky';

export class Main extends Component {

  render() {

    let search = <Col sm={6} md={6} ><ConnectedSearch/></Col>
    let favorites = <Col ><ConnectedFilter/></Col>
    let map = <ConnectedMap />
    let roulette = <ConnectedRoulette />

  return (
  <div>
    <div className='menuSide'>
      <ConnectedNavigation />
    </div>
    <div className='mainWindow'>
      <StickyContainer>
          <Grid>
            <Row className="container">

                {this.props.navigation === "search" ? search : null}
                {this.props.navigation === "roulette" ? roulette : null}
                {this.props.navigation === "favorites" ? favorites : null}
                {this.props.navigation === "map" ? map : null}

            </Row>
          </Grid>
        </StickyContainer>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    navigation: state.navigation,
  }
}

export const ConnectedMain = connect(mapStateToProps)(Main)
