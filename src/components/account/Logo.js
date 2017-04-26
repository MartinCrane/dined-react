import React, { Component } from 'react';



export class Logo extends Component {


  render() {
    return(<div  className="login">
      <img style={{height: 60}} src={require('../../images/logo.png')}></img>
      </div>
      )
    }
}
