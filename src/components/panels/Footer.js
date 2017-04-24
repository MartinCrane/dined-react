import React, { Component } from 'react'
import { connect } from 'react-redux'


export class Footer extends Component {

  render() {

  return (
    <div className="footerCentered">
      <h2>PICKY {this.props.email}</h2>
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
