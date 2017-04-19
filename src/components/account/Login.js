import React, { Component } from 'react';
import { setLogin } from '../../actions/setToken'
import { getRestaurantsZip } from '../../actions/getRestaurantsZip'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'


export class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
   });
  }


  handleSubmit(event) {
    event.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:4000/sessions',
      data: {
        email: `${this.state.email}`,
        password: `${this.state.password}`
      }
    }).then((response)=>{
      let jwt = response.data.jwt;
      localStorage.setItem(`jwt`, jwt)
      this.props.setLogin(jwt)
  }).catch(function(err) {
    console.log("Error logging in", err);
  });

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
