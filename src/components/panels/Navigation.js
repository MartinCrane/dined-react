import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Grid, ButtonToolbar, DropdownButton, ButtonGroup, Col, MenuItem, NavDropdown, Nav, NavItem, Navbar, FormControl, FormGroup, Row } from 'react-bootstrap';
import { setLogin } from '../../actions/setLogin'
import { clearFavorites } from '../../actions/favorites'
import { selectNavigation } from '../../actions/navigation'
import { StickyContainer, Sticky } from 'react-sticky';
import { Modal } from 'react-bootstrap';

export class Navigation extends Component {

  constructor(props){
    super();
    this.state= {
      menu: false,
      offset: '0px',
      style: ' ',
      showModal: false
    }
    this.logout = this.logout.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.expandMenu = this.expandMenu.bind(this)
    this.open_modal = this.open_modal.bind(this)
    this.close_modal = this.close_modal.bind(this)
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

  close_modal() {
    this.setState({ showModal: false });
  }

  open_modal() {
    debugger
    this.setState({ showModal: true });
    debugger
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
  const about_modal = <div>
                <Modal show={this.state.showModal} onHide={this.close_modal}>
                  <Modal.Header closeButton>
                    <Modal.Title>About Us</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h2>Gee Li</h2>
                    <p className='p-modal'>Gee loves data and doing his taxes. He's weird like that. You can find him currently focused on building web applications and trying to keep up with his two kids. Read his blog at <a href='https://medium.com/@codeparachute'>on Medium.</a></p>
                    <h2>Arthur Roncey</h2>
                    <p className='p-modal'>Arthur is a French New Yorker who is psyched about starting a career in Software Development. He is passionate about Plants, the Internet of Things and the place where these interests meet. Read his blog at <a href='https://medium.com/@arthurroncey'>on Medium.</a></p>
                    <h2>Martin Crane</h2>
                    <p className='p-modal'>Martin is a web developer and musician from NYC. Read his blog on <a href='https://martincrane.github.io'> Github</a> or <a href='https://www.martincrane.net'>listen to his music</a>. </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close_modal}>Close</Button>
                  </Modal.Footer>
                </Modal>
            </div>

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
                    <button key={7} className="verticalNavButton"
                                  onClick={this.open_modal}>
                                  About
                                  <img src={require('../../images/question-mark.png')}></img>
                                </button>
                    <button key={6} className="verticalNavButton"
                            onClick={this.logout}>Logout
                            <img src={require('../../images/logout.png')}></img>
                          </button>
                  </div>
  return(
      <div className={this.state.menu ? 'menuSide open' : 'menuSide'} >
        {sideBar}
        {about_modal}
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
