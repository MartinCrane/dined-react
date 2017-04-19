import axios from 'axios'

export const accountRegister = (email, password, reducer) =>{
  return axios({
      method: 'post',
      url: 'http://localhost:4000/accounts',
      data: {
        account: {
          email: `${email}`,
          password: `${password}`
        }
      }
    }).then((response)=>{
      let jwt = response.data.jwt;
      localStorage.setItem(`jwt`, jwt)
      reducer({login: true, email: response.data.email})
    }).catch((response)=> {
      reducer({login: false, email: ''})
    });
}

export const accountLogin = (email, password, reducer) =>{
  return axios({
    method: 'post',
    url: 'http://localhost:4000/sessions',
    data: {
      email: `${email}`,
      password: `${password}`
    }
  }).then((response) => {
    let jwt = response.data.jwt
    localStorage.setItem(`jwt`, jwt)
    reducer({login: true, email: response.data.email})
  }).catch((response)=> {
    reducer({login: false, email: ''})
  });
}

export const accountPing = (store) =>{
  if (localStorage.jwt) {
    return fetch(`http://localhost:4000/ping`, {
      method: 'post',
      headers: {
        Authorization: `${localStorage.jwt}`,
        }
      }).
      then(res => res.json()).
      then(res => {
        let log = false
        if (res.logged_in === "true") {
          log = true
        }
        store.dispatch({type: 'SET_LOGIN', payload: log})
      }).catch(function(err) {
      })
    } else {
      return
    }
}
