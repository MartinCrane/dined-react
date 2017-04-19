import axios from 'axios'

export const accountRegister = (email, password) =>{
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
      return response
  }).catch(function(err) {
    console.log("Error logging in", err);
  });

}

export const accountLogin = (email, password) =>{
  //   return axios({
  //     method: 'post',
  //     url: 'http://localhost:4000/sessions',
  //     data: {
  //       email: `${email}`,
  //       password: `${password}`
  //     }
  //   }).then((response)=>{
  //     let jwt = response.data.jwt;
  //     localStorage.setItem(`jwt`, jwt)
  //     return true
  // }).catch(function(err) {
  //     return false
  // });
  // return axios({
  //   method: 'post',
  //   url: 'http://localhost:4000/sessions',
  //   data: {
  //     email: `${email}`,
  //     password: `${password}`
  //   }
  // }).then((response) => {
  //   let jwt = response.data.jwt
  //   localStorage.setItem(`jwt`, jwt)
  //   this.props.setLogin(true)
  // }).catch((response)=> {
  //   this.props.setLogin(false)
  // });
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
