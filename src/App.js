import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Grid } from 'react-bootstrap';
import { ConnectedMain } from './components/panels/Main'
import { ConnectedLogin } from './components/account/Login'
import { ConnectedSearch } from './components/search/Search'
import { ConnectedRegister } from './components/account/Registration'
import { Logo } from './components/account/Logo'
import { StickyContainer, Sticky } from 'react-sticky';
import { ConnectedFooter } from './components/panels/Footer'

import './App.css';

class App extends Component {

  render() {

    let logout = <div>
                  <Row style={{padding: '20px', paddingBottom: '50px'}}>
                    <Col lg={4} sm={4} xs={12}>
                    <Logo/>
                    <ConnectedLogin/>
                    </Col>
                    <Col lg={4} sm={4} xs={12}>
                    <br></br>
                    <ConnectedRegister />
                    </Col>
                    <Col lg={4} sm={4}>

                    </Col>
                  </Row>
                </div>

    return (
      <div>
        {!!localStorage.jwt ? <ConnectedMain /> : logout}
        <ConnectedFooter/>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    login: state.account.login
  }
}

export const ConnectedApp = connect(mapStateToProps)(App)
