import React, { Component } from 'react';
import loginAction from '../../actions/loginAction'
import axios from 'axios'
import { authService } from '../../actions/authService'
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
      debugger
      let jwt = response.data.jwt;
      loginAction.loginUser(jwt);
      return true;
  }).catch(function(err) {
    console.log("Error logging in", err);
  });

    this.setState({
      email: '', password: ''
    })
  }


  render(){
    return(
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
    )
  }

}
