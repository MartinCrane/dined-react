import React, { Component } from 'react';
import { Restuarant } from './components/restuarant/Restuarant'
import { RestuarantThumb } from './components/restuarant/RestuarantThumb'
import logo from './logo.svg';

import './App.css';

class App extends Component {

  render() {
    return (
        <div>
          < Restuarant />
        < RestuarantThumb />
          < Restuarant />
          < Restuarant />
          < Restuarant />
        </div>
    );
  }

}

export default App;
