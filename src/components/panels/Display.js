import React, { Component } from 'react';
import { connect } from 'react-redux'
export class Display extends Component {

  render(){
    return(
        <div className="resultsContainer">

          <h1 style={{display: 'flex', justifyContent: 'center', fontSize: '5em'}}>
            <img style={{height: 60}}src={require('../../images/logoPic.png')}></img>
            <b>{this.props.navigation}</b>

          </h1>
        </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    navigation: state.navigation,
  }
}

export const ConnectedDisplay = connect(mapStateToProps)(Display)
