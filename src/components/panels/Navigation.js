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
      offset: '0px'
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
    if (!this.state.menu) {
      offset = '260px'
    }
    this.setState({
      menu: !this.state.menu,
      offset: offset
    })
    console.log(this.state.offset)

  }



  render(){
    let logout = <NavItem eventKey={1} onClick={(event) => this.logout(event)} >Logout</NavItem>
    // let navForm = <FormGroup><FormControl type="text" placeholder="Search" /></FormGroup>{' '}<Button type="submit">Submit</Button></Navbar.Form>

  const sideBar = (
                      <ButtonGroup vertical block style={{left: this.state.offset, borderRadius: '0px'}}>
                          <Button key={1} className="verticalNavButton"
                                  style={{backgroundColor: 'red'}}
                                  onClick={this.expandMenu}>
                            <Row>
                              <Col xs ={3} sm={3} md={3}>Menu</Col><Col xs={7} sm={7} md={7}></Col>
                            </Row>
                          </Button>
                          <Button key={2} className="verticalNavButton"
                                  onClick={this.handleClick.bind(null, "Map")}>
                            <Row>
                              <Col xs={3} sm={3} md={3}>Maps</Col><Col xs={7} sm={7} md={7}></Col><Col xs={1} sm={1} md={1}><img style={{align: 'right', height: '25px'}}src={require('../../images/maps.png')}></img></Col>
                            </Row>
                          </Button>
                          <Button key={3} className="verticalNavButton"
                                  onClick={this.handleClick.bind(null, "Search")}>
                            <Row>
                              <Col xs={3} sm={3} md={3}>Search</Col><Col xs={7} sm={7} md={7}></Col><Col xs={1} sm={1} md={1}><img style={{align: 'right', height: '25px'}}src={require('../../images/search.png')}></img></Col>
                            </Row>
                          </Button>
                          <Button key={4} className="verticalNavButton"
                                  onClick={this.handleClick.bind(null, "Favorites")}>
                            <Row>
                              <Col xs={3} sm={3} md={3}>Favorites</Col><Col xs={7} sm={7} md={7}></Col><Col xs={1} sm={1} md={1}><img style={{align: 'right', height: '25px'}}src={require('../../images/fav.png')}></img></Col>
                            </Row>
                          </Button>
                          <Button key={5} className="verticalNavButton"
                                  onClick={this.handleClick.bind(null, "Roulette")}>
                            <Row>
                              <Col xs={3} sm={3} md={3}>Roulette</Col><Col xs={7} sm={7} md={7}></Col><Col xs={1} sm={1} md={1}><img style={{align: 'right', height: '25px'}}src={require('../../images/roulette.png')}></img></Col>
                            </Row>
                          </Button>
                    </ButtonGroup>
                    );
  return(
      <div style={{width: 300, borderRadius: '0px'}}>
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
