import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import { ConnectedLogin } from './components/account/Login'
import { ConnectedSearch } from './components/search/Search'
import { ConnectedRegister } from './components/account/Registration'
import { Main } from './components/panels/Main'
import { ConnectedNavigation } from './components/panels/Navigation'
import logo from './logo.svg';
import  GoogleApiWrapper from './components/map/mapContainer'
import './App.css';

class App extends Component {

  render() {
    let login = <div> <ConnectedSearch /></div>
    let logout = <div> <ConnectedLogin /></div>

    return (
      <div>
        <Row className="container" >
          <ConnectedNavigation/>
        </Row>
        <Row className="container">
          {this.props.login ? <Main /> : logout}
        </Row>
        <GoogleApiWrapper />
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    login: state.account.login
  }
}

export const ConnectedApp = connect(mapStateToProps)(App)
