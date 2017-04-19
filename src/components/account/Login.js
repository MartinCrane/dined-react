import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { setLogin } from '../../actions/setLogin'
import { accountLogin } from '../../actions/account'
import { getRestaurantsZip } from '../../actions/getRestaurantsZip'


export class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.accountLogin = accountLogin.bind(this)
  }

  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
   });
  }

  handleSubmit(event) {
    event.preventDefault()
    accountLogin(this.state.email, this.state.password, this.props.setLogin)
    this.setState({
      email: '', password: ''
    })
  }



  render(){
    return(<div>
      <form onSubmit={(event) => this.handleSubmit(event)} className="form" >
        <h1>Login</h1>
        <p>
          <input
            type="text"
            onChange={this.handleChange.bind(null, "email")}
            placeholder="e-mail"
            value={this.state.email} />

          <input
            type="text"
            onChange={this.handleChange.bind(null, "password")}
            placeholder="password"
            value={this.state.password} />
        </p>
        <input type="submit" />
      </form>
      <h2>{this.props.login}</h2>

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

export const ConnectedLogin = connect(mapStateToProps,mapDispatchToProps)(Login)
