import React, { Component } from 'react';
import { Restuarant } from './components/restuarant/Restuarant'
import logo from './logo.svg';

import './App.css';

class App extends Component {

  render() {
    return (
        <div>
          < Restuarant />
          < Restuarant />
          < Restuarant />
          < Restuarant />
        </div>
    );
  }

}

export default App;
