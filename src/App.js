import React, { Component } from 'react';
// import { Restuarant } from './components/restuarant/Restuarant'
// import { Login } from './components/account/login'
// import { RestuarantThumb } from './components/restuarant/RestuarantThumb'
import { ConnectedLogin } from './components/account/login'
import logo from './logo.svg';

import './App.css';

class App extends Component {

  render() {
    return (
        <div>
          <ConnectedLogin />
        </div>
    );
  }

}

export default App;
