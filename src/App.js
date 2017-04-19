import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ConnectedLogin } from './components/account/Login'
import { ConnectedRegister } from './components/account/Registration'
import { ConnectedLogout } from './components/account/Logout'
import { Search } from './components/search/Search'

import logo from './logo.svg';

import './App.css';

class App extends Component {

  render() {
    let login = <div> <ConnectedLogout /> <Search /></div>
    let logout = <div> <ConnectedLogin /></div>

    return (
        <div>
          {this.props.login ? login : logout}
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    login: state.account.login,
    email: state.account.email
  }
}

export const ConnectedApp = connect(mapStateToProps)(App)
