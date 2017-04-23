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
    this.logout = this.logout.bind(this)
    this.handleClick = this.handleClick.bind(this)
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



  render(){
    let logout = <NavItem eventKey={1} onClick={(event) => this.logout(event)} >Logout</NavItem>
    // let navForm = <FormGroup><FormControl type="text" placeholder="Search" /></FormGroup>{' '}<Button type="submit">Submit</Button></Navbar.Form>

    const buttons = <ButtonToolbar>
                      <Button
                        onClick={this.handleClick.bind(null, "favorites")}>Favories</Button>
                      <Button
                        onClick={this.handleClick.bind(null, "map")}>Map</Button>
                      <Button
                        onClick={this.handleClick.bind(null, "search")}>Search</Button>
                      {this.props.login ? <Button onClick={(event) => this.logout(event)}>Logout</Button> : null}
                    </ButtonToolbar>

  const sideBar = (
                      <ButtonGroup vertical block>
                          <Button className="verticalNavButton">
                            <Row>
                              <Col xs ={3} sm={3} md={3}>Menu</Col><Col xs={7} sm={7} md={7}></Col><Col xs={1} sm={1} md={1}><img style={{align: 'right', height: '25'}} src={require('../../images/maps.png')}></img></Col>
                            </Row>
                          </Button>
                          <Button className="verticalNavButton"
                                  onClick={this.handleClick.bind(null, "map")}>
                            <Row>
                              <Col xs={3} sm={3} md={3}>Maps</Col><Col xs={7} sm={7} md={7}></Col><Col xs={1} sm={1} md={1}><img style={{align: 'right', height: '25'}}src={require('../../images/maps.png')}></img></Col>
                            </Row>
                          </Button>
                          <Button className="verticalNavButton"
                                  onClick={this.handleClick.bind(null, "search")}>
                            <Row>
                              <Col xs={3} sm={3} md={3}>Search</Col><Col xs={7} sm={7} md={7}></Col><Col xs={1} sm={1} md={1}><img style={{align: 'right', height: '25'}}src={require('../../images/search.png')}></img></Col>
                            </Row>
                          </Button>
                          <Button className="verticalNavButton"
                                  onClick={this.handleClick.bind(null, "favorites")}>
                            <Row>
                              <Col xs={3} sm={3} md={3}>Favorites</Col><Col xs={7} sm={7} md={7}></Col><Col xs={1} sm={1} md={1}><img style={{align: 'right', height: '25'}}src={require('../../images/fav.png')}></img></Col>
                            </Row>
                          </Button>
                          <Button className="verticalNavButton"
                                  onClick={this.handleClick.bind(null, "favorites")}>
                            <Row>
                              <Col xs={3} sm={3} md={3}>Roulette</Col><Col xs={7} sm={7} md={7}></Col><Col xs={1} sm={1} md={1}><img style={{align: 'right', height: '25'}}src={require('../../images/fav.png')}></img></Col>
                            </Row>
                          </Button>
                    </ButtonGroup>
                    );
  return(
      <div style={{width: 300}}>
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
