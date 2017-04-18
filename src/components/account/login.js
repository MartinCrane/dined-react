import React, { Component } from 'react';
import setToken from '../../actions/setToken'
import axios from 'axios'
import { authService } from '../../actions/authService'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
export class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleOnEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleOnPasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault()

    // authService(this.state.email, this.state.password)
    axios({
      method: 'post',
      url: 'http://localhost:4000/sessions',
      data: {
        email: `${this.state.email}`,
        password: `${this.state.password}`
      }
    }).then(function(response) {
      let jwt = response.data.jwt;
      setToken(jwt);
      return true;
  }).catch(function(err) {
    console.log("Error logging in", err);
  });
  debugger
    this.setState({
      email: '', password: ''
    })
  }


  render(){
    return(<div>
      <form onSubmit={(event) => this.handleOnSubmit(event)} >
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnEmailChange(event)}
            placeholder="e-mail"
            value={this.state.email} />
          <input
            type="text"
            onChange={(event) => this.handleOnPasswordChange(event)}
            placeholder="password"
            value={this.state.password} />
        </p>
        <input type="submit" />
      </form>
      <h2>{this.state.jwt}</h2>
    </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setToken: setToken
  }, dispatch)
}
const mapStateToProps = (state)=>{
  return{
    jwt: state.account.jwt,
  }
}

export const ConnectedLogin = connect(mapStateToProps,mapDispatchToProps)(Login)
