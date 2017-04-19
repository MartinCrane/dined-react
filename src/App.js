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

  logout() {
    return localStorage.removeItem('jwt')
  }

  render() {
    return (
        <div>

          <ConnectedLogout/>
          <ConnectedLogin />
          <ConnectedRegister />
          <Search />
        </div>
    );
  }
}

export default App;
