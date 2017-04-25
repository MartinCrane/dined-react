import React, { Component } from 'react';



export class Logo extends Component {


  render() {
    return(<div  className="login">
    <img stle={{height: '50px', marginLeft: 'auto', marginRight: 'auto'}} src={require('../../images/logoSmall.png')}></img>
      </div>
      )
    }
}
