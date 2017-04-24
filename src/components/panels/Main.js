import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'
import { ConnectedSearch } from '../../components/search/Search'
import { ConnectedFilter } from '../../components/favorites/Filter'
import { ConnectedNavigation } from '../../components/panels/Navigation'
import { ConnectedMap } from '../map/Map'
import { ConnectedRoulette } from '../roulette_map/RouletteMap'
import { ConnectedDisplay } from '../../components/panels/Display'
import { StickyContainer, Sticky } from 'react-sticky';

export class Main extends Component {

  render() {

    let search = <Col sm={6} md={6} ><ConnectedSearch key={'search'}/></Col>
    let favorites = <Col ><ConnectedFilter key={'favorites'}/></Col>
    let map = <ConnectedMap key={'map'}/>
    let roulette = <ConnectedRoulette key={'roulette'}/>

  return (
  <div>
    <div className='menuSide'>
      <ConnectedNavigation />
    </div>
      <div className='mainWindow'>
        <Row>
          <ConnectedDisplay />
        </Row>
        <StickyContainer>
          <Grid>
            <Row className="container">
                {this.props.navigation === "Search" ? search : null}
                {this.props.navigation === "Roulette" ? roulette : null}
                {this.props.navigation === "Favorites" ? favorites : null}
                {this.props.navigation === "Map" ? map : null}
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
