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
      password: '',
      passwordConfirm: ''
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

   handleChange(field, evt) {
     this.setState({
       [field]: evt.target.value
    });
  }


  handleOnSubmit(event) {
    event.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:4000/sessions',
      data: {
        email: `${this.state.email}`,
        password: `${this.state.password}`,
        passwordConfirm: `${this.state.passwordConfirm}`
      }
    }).then((response)=>{
      let jwt = response.data.jwt;
      localStorage.setItem(`jwt`, jwt)
      this.props.setLogin(jwt)
  }).catch(function(err) {
    console.log("Error logging in", err);
  });

    this.setState({
      email: '', password: '', passwordConfirm: ''
    })
  }


  render(){
    return(<div>
      <form onSubmit={this.handleSubmit(event)} >
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

          <input
            type="text"
            onChange={(event) => this.handleOnPasswordChange(event)}
            placeholder="password"
            value={this.state.passwordConfirm} />
        </p>
        <input type="submit" />
      </form>
    </div>
    )
  }
}

    // const mapDispatchToProps = (dispatch) => {
    //   return bindActionCreators({
    //     setLogin: setLogin
    //   }, dispatch)
    // }
    //
    // const mapStateToProps = (state)=>{
    //   return{
    //     login: state.account.login,
    //   }
}

// export const ConnectedLogin = connect(mapStateToProps,mapDispatchToProps)(Login)
