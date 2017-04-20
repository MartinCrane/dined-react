import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Search } from '../../components/search/Search'
import { Favorites } from '../../components/favorites/Favorites'
import { ConnectedNavigation } from './Navigation'
import { MenuItem, NavDropdown, Nav, NavItem, Navbar, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux'

export class Main extends Component {
  render() {

    return (
      <div>
        <Row className="container" fluid="true" >
          <Col sm={6} md={6} className="grey">
            <Search/>
          </Col>
          <Col sm={6} md={6} className="grey">
            <Favorites/>
          </Col>

        </Row>
      </div>
    )
  }

}
