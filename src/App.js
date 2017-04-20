import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Grid } from 'react-bootstrap';
import { Main } from './components/panels/Main'
import { ConnectedLogin } from './components/account/Login'
import { ConnectedRegister } from './components/account/Registration'
import { ConnectedNavigation } from './components/panels/Navigation'
import logo from './logo.svg';


import './App.css';

class App extends Component {

  render() {

    let logout = <div> <ConnectedLogin /><ConnectedRegister /></div>

    return (
      <Grid>
        <Row className="container" >
          <ConnectedNavigation/>
        </Row>
        <Row className="container">
          {this.props.login ? <Main /> : logout}
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    login: state.account.login
  }
}

export const ConnectedApp = connect(mapStateToProps)(App)
