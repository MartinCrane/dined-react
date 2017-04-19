import React, { Component } from 'react';
import { ConnectedLogin } from './components/account/Login'
import { ConnectedRegister } from './components/account/Registration'
import { Search } from './components/search/Search'
import logo from './logo.svg';

import './App.css';

class App extends Component {

  render() {
    return (
        <div>
          <ConnectedLogin />
          <ConnectedRegister />
          <Search />
        </div>
    );
  }

}

export default App;
