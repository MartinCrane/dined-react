import React from 'react';
import { loginAction } from './loginAction'
import axios from 'axios'

export const authService = (email, password) => {
    let url = 'http://localhost:4000/sessions'

    axios.post('http://localhost:4000/sessions', {
      email: `${email}`,
      password: `${password}`
      }
  ).then(function(response) {
      debugger
      // We get a JWT back.
      let jwt = response.id_token;
      // We trigger the LoginAction with that JWT.
      loginAction.loginUser(jwt);
      return true;
  }).catch(function(err) {
    console.log("Error logging in", err);
  });

}
