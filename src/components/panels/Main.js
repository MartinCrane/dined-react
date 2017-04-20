import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ConnectedSearch } from '../../components/search/Search'
import { ConnectedFavorites } from '../../components/favorites/Favorites'


export class Main extends Component {
  render() {

    return (
      <div>
        <Row className="container">
          <Col sm={6} md={6} className="grey">
            <ConnectedSearch />
          </Col>
          <Col sm={6} md={6} className="grey">
            <ConnectedFavorites/>
          </Col>

        </Row>
      </div>
    )
  }
}
