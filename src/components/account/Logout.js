import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setLogin } from '../../actions/setLogin'
import { clearFavorites } from '../../actions/favorites'



export class Logout extends Component {

  constructor(props){
    super();
    this.logout = this.logout.bind(this)
  }

  logout() {
    localStorage.removeItem('jwt')
    this.props.setLogin(false)
    this.props.clearFavorites()
  }

  render(){
    return(<div>
      <button onClick={this.logout}>logout</button> <h2>{this.props.login ? "logged in" : "logged out"}</h2>
      <h2>{this.props.email}</h2>
      </div>
    )
  }
}

    const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({
        setLogin: setLogin,
        clearFavorites: clearFavorites
      }, dispatch)
    }

    const mapStateToProps = (state)=>{
      return{
        login: state.account.login,
        email: state.account.email
      }
}

export const ConnectedLogout = connect(mapStateToProps,mapDispatchToProps)(Logout)
