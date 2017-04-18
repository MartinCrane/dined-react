import React, { Component } from 'react';
import { ConnectedLogin } from './components/account/Login'
import { Search } from './components/search/Search'
import logo from './logo.svg';

import './App.css';

class App extends Component {

  render() {
    return (
        <div>
          <ConnectedLogin />
          <Search />
        </div>
    );
  }

}

export default App;
