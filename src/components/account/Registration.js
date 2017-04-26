import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { FormGroup, Button, ControlLabel, HelpBlock, FormControl, Row, Col } from 'react-bootstrap';
import { setLogin } from '../../actions/setLogin'
import { accountRegister } from '../../actions/account'


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
    return(<div className="login">
      <h1>Registration</h1>
      <form onSubmit={(event) => this.handleSubmit(event)} className="grey">
            <label>Email</label>
            <FormControl
              type="text"
              onChange={this.handleChange.bind(null, "email")}
              placeholder="e-mail"
              value={this.state.email} /><br></br>
            <label>Password</label>
            <FormControl
              type="password"
              onChange={this.handleChange.bind(null, "password")}
              placeholder="password"
              value={this.state.password} /><br></br>
            <label>Password Confirm</label>
            <FormControl
              type="password"
              onChange={this.handleChange.bind(null, "passwordConfirm")}
              placeholder="confirm password"
              value={this.state.passwordConfirm} /><br></br>
            <Button type="submit">
              Submit
            </Button>
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

    export const ConnectedRegister = connect(null,mapDispatchToProps)(Registration)
