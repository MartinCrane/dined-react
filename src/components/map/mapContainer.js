import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react'
import { Component } from 'react'
import { Map } from './Map'

export class Container extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    const style = {
      width: '100vw',
      height: '100vh'
    }

    return (
        <div style={style}>
          <Map google={this.props.google}/>
        </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCjef7cMcrZYQfvEqlTFvvn7VqKTBDoTvE',
  version: '3.27'
})(Container)