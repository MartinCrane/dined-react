import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ConnectedLogin } from './components/account/Login'
import { ConnectedRegister } from './components/account/Registration'
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
          
          <button onClick={this.logout}>logout</button>
          <ConnectedLogin />
          <ConnectedRegister />
          <Search />
        </div>
    );
  }
}

export default App;
