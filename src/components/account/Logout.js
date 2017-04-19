import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { setLogin } from '../../actions/setLogin'



export class Logout extends Component {

  constructor(props){
    super();
    this.logout = this.logout.bind(this)
  }

  logout() {
    localStorage.removeItem('jwt')
    this.props.setLogin(false)
  }

  render(){
    return(<div>
      <button onClick={this.logout}>logout</button> <h2>{this.props.login ? "logged in" : "logged out"}</h2>
      </div>
    )
  }
}

    const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({
        setLogin: setLogin
      }, dispatch)
    }

    const mapStateToProps = (state)=>{
      return{
        login: state.account.login,
      }
}

export const ConnectedLogout = connect(mapStateToProps,mapDispatchToProps)(Logout)
