import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedLogin } from './components/account/Login'
import { ConnectedLogout } from './components/account/Logout'
import { Search } from './components/search/Search'

import './App.css';

class App extends Component {

  render() {
    let login = <div> <ConnectedLogout /> <Search /></div>
    let logout = <div> <ConnectedLogin /></div>

    return (
        <div>
          {/* {this.props.login ? login : logout} */}
          {login}
          {logout}
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
