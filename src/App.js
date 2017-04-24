import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Grid } from 'react-bootstrap';
import { ConnectedMain } from './components/panels/Main'
import { ConnectedLogin } from './components/account/Login'
import { ConnectedSearch } from './components/search/Search'
import { ConnectedRegister } from './components/account/Registration'
import { StickyContainer, Sticky } from 'react-sticky';
import './App.css';

class App extends Component {

  render() {

    let logout = <div> <ConnectedLogin /><ConnectedRegister /></div>

    return (
      <div>
        {this.props.login ? <ConnectedMain /> : logout}
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
