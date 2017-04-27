import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'
import { ConnectedSearch } from '../../components/search/Search'
import { ConnectedFilter } from '../../components/favorites/Filter'
import { ConnectedNavigation } from '../../components/panels/Navigation'
import { Footer } from '../../components/panels/Footer'
import { ConnectedMap } from '../map/Map'
import { ConnectedRoulette } from '../roulette_map/RouletteMap'
import { ConnectedDisplay } from '../../components/panels/Display'
import { StickyContainer, Sticky } from 'react-sticky';

export class Main extends Component {

  render() {

    let search = <ConnectedSearch key={'search'}/>
    let favorites = <ConnectedFilter key={'favorites'}/>
    let map = <ConnectedMap key={'map'}/>
    let roulette = <ConnectedRoulette key={'roulette'}/>

  return (
  <div>
    <ConnectedNavigation />
      <div className='mainWindow'>
        <Row>
          <ConnectedDisplay/>
        </Row>
        <StickyContainer>
          <Grid>
            {this.props.navigation === "Search" ? search : null}
            {this.props.navigation === "Roulette" ? roulette : null}
            {this.props.navigation === "Favorites" ? favorites : null}
            {this.props.navigation === "Map" ? map : null}
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
