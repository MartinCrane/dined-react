import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Grid, ButtonToolbar, DropdownButton, ButtonGroup, Col, MenuItem, NavDropdown, Nav, NavItem, Navbar, FormControl, FormGroup, Row } from 'react-bootstrap';
import { setLogin } from '../../actions/setLogin'
import { clearFavorites } from '../../actions/favorites'
import { selectNavigation } from '../../actions/navigation'
import { StickyContainer, Sticky } from 'react-sticky';


export class Navigation extends Component {

  constructor(props){
    super();
    this.state= {
      menu: false,
      offset: '0px',
      style: ' '
    }
    this.logout = this.logout.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.expandMenu = this.expandMenu.bind(this)
  }

  logout() {
    localStorage.removeItem('jwt')
    this.props.setLogin(false)
    this.props.clearFavorites()
  }

  changeNavigation(event) {
    this.props.selectNavigation(event)
  }

  handleClick(field, event) {
    this.props.selectNavigation(field)
  }

  expandMenu() {
    let offset = '0px'
    let style = ''
    if (!this.state.menu) {
      offset = '260px',
      style = 'navigationTransOpen'
    }
    this.setState({
      menu: !this.state.menu,
      offset: offset,
      style: style
    })
    console.log(this.state.offset)
  }



  render(){

  const sideBar = <div>
                    <button key={1} className="verticalNavButton"
                            onClick={this.expandMenu}>
                            PICKY
                            <img src={require('../../images/menu.png')}></img>
                          </button>
                    <button key={2} className="verticalNavButton"
                            onClick={this.handleClick.bind(null, "Map")}>
                            Map
                            <img src={require('../../images/maps.png')}></img>
                          </button>
                    <button key={3} className="verticalNavButton"
                            onClick={this.handleClick.bind(null, "Search")}>
                            Search
                            <img src={require('../../images/search.png')}></img>
                            </button>
                    <button key={4} className="verticalNavButton"
                            onClick={this.handleClick.bind(null, "Favorites")}>
                            Favorites
                            <img src={require('../../images/fav.png')}></img>
                          </button>
                    <button key={5} className="verticalNavButton"
                            onClick={this.handleClick.bind(null, "Roulette")}>
                            Roulette
                            <img src={require('../../images/roulette.png')}></img>
                          </button>
                    <button key={6} className="verticalNavButton"
                            onClick={this.logout}>Logout
                            <img src={require('../../images/logout.png')}></img>
                          </button>
                  </div>
  return(
      <div className={this.state.menu ? 'menuSide open' : 'menuSide'} >
        {sideBar}
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
