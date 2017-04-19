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
    return axios({
      method: 'post',
      url: 'http://localhost:4000/sessions',
      data: {
        email: `${email}`,
        password: `${password}`
      }
    }).then((response)=>{
      let jwt = response.data.jwt;

      localStorage.setItem(`jwt`, jwt)
      return true
  }).catch(function(err) {
      return false
  });
}
