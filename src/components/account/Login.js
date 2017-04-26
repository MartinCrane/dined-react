import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { FormGroup, Button, ControlLabel, HelpBlock, FormControl, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { setLogin } from '../../actions/setLogin'
import { setFavorites } from '../../actions/setFavorites'
import { accountLogin } from '../../actions/account'


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
    accountLogin(this.state.email, this.state.password, this.props.setLogin, this.props.setFavorites)
    this.setState({
      email: '', password: ''
    })
  }

  render(){
    return(
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={(event) => this.handleSubmit(event)} className="grey" >
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
      setLogin: setLogin,
      setFavorites: setFavorites
    }, dispatch)
  }

  const mapStateToProps = (state)=>{
    return{
      login: state.account.login,
    }
  }

export const ConnectedLogin = connect(mapStateToProps,mapDispatchToProps)(Login)
