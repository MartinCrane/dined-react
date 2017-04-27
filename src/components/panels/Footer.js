import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Row } from 'react-bootstrap';

export class Footer extends Component {

  render() {

  return (
    <div className="footerCentered">
      <div className="footerContent">
        <img src={require('../../images/logoSmall.png')}></img> {this.props.email}
      </div>
    </div>

    )
  }
}

const mapStateToProps = (state)=>{
  return{
    email: state.account.email,
  }
}

export const ConnectedFooter = connect(mapStateToProps)(Footer)
