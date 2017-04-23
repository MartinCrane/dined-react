import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MenuItem, NavDropdown, Nav, NavItem, Navbar, FormControl, FormGroup, Button } from 'react-bootstrap';
import { setLogin } from '../../actions/setLogin'
import { clearFavorites } from '../../actions/favorites'
import { selectNavigation } from '../../actions/navigation'


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

  changeNavigation(event) {
    this.props.selectNavigation(event)
  }



  render(){
    let logout = <NavItem eventKey={1} href="#" onClick={(event) => this.logout(event)} >Logout</NavItem>
    // let navForm = <FormGroup><FormControl type="text" placeholder="Search" /></FormGroup>{' '}<Button type="submit">Submit</Button></Navbar.Form>

  return(
      <div className="menuBar">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Diner ---- </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={3} onSelect={(event) => {this.changeNavigation(event)}} title="where to?" id="basic-nav-dropdown">
              <MenuItem eventKey={"favorites"} >Favorites</MenuItem>
              <MenuItem eventKey={"map"}>Map</MenuItem>
              <MenuItem eventKey={"search"}>Search</MenuItem>
              <MenuItem eventKey={"roulette"}>Roulette</MenuItem>
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav>
          <NavItem >{this.props.email}</NavItem>
          </Nav>
          <Nav pullRight>
          <NavItem >{this.props.login ? logout : null}</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

    const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({
        setLogin: setLogin,
        clearFavorites: clearFavorites,
        selectNavigation: selectNavigation
      }, dispatch)
    }

    const mapStateToProps = (state)=>{
      return{
        login: state.account.login,
        email: state.account.email,
        navigation: state.navigation
      }
}

export const ConnectedNavigation = connect(mapStateToProps,mapDispatchToProps)(Navigation)
