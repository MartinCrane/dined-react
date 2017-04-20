import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MenuItem, NavDropdown, Nav, NavItem, Navbar, FormControl, FormGroup, Button } from 'react-bootstrap';



export class Geolocation extends Component {
      //Here we will check the browser supports the Geolocation API; if exists, then we will display the location
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            var initialPosition = JSON.stringify(position);
            this.setState({initialPosition});
          },
          (error) => alert(JSON.stringify(error)),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
      }

  render(){
    return(<div>hello</div>)
  }

}
