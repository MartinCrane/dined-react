import React, { Component } from 'react'
import { connect } from 'react-redux'


export class Footer extends Component {

  render() {

  return (
    <div className="footerCentered">
      <div className="footerContent">
        <h2> <img style={{height: 30}}src={require('../../images/logoSmall.png')}></img> {this.props.email}</h2>
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
