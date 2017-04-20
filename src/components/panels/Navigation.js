import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MenuItem, NavDropdown, Nav, NavItem, Navbar, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios'
import { setLogin } from '../../actions/setLogin'
import { clearFavorites } from '../../actions/favorites'


export class Navigation extends Component {

  constructor(props){
    super();
    this.logout = this.logout.bind(this)
  }

  logout() {
    localStorage.removeItem('jwt')
    this.props.setLogin(false)
    this.props.clearFavorites()
  }

  render(){
    let logout = <NavItem eventKey={1} href="#"onClick={(event) => this.logout(event)} >Logout</NavItem>
    return(
      <div className="logged">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Diner ---- </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            {this.props.login ? logout : null}
            <NavDropdown eventKey={3} title="x" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem >{this.props.email}</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

    const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({
        setLogin: setLogin,
        clearFavorites: clearFavorites
      }, dispatch)
    }

    const mapStateToProps = (state)=>{
      return{
        login: state.account.login,
        email: state.account.email
      }
}

export const ConnectedNavigation = connect(mapStateToProps,mapDispatchToProps)(Navigation)
