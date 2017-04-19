import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import axios from 'axios'
import { setLogin } from '../../actions/setLogin'
import { accountRegister } from '../../actions/account'
import { getRestaurantsZip } from '../../actions/getRestaurantsZip'


export class Registration extends Component {

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

  handleSubmit(event) {
      event.preventDefault(event)

      if (this.state.password !== this.state.passwordConfirm) {
        return alert("Password and Password Confirmation must match!")
      } else {
         accountRegister(this.state.email, this.state.password, this.props.setLogin)
      }

      this.setState({
        email: '', password: '', passwordConfirm: ''
      })
    

  }


  render() {
    return(<div>
      <form onSubmit={(event) => this.handleSubmit(event)} className="form">
          <h1>Registration</h1>
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
              onChange={this.handleChange.bind(null, "passwordConfirm")}
              placeholder="password"
              value={this.state.passwordConfirm} />
          </p>
        <input type="submit" />
      </form>
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

    export const ConnectedRegister = connect(mapStateToProps,mapDispatchToProps)(Registration)
