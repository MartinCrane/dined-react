export const search =  =>{
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
      return response
  }).catch(function(err) {
    console.log("Error logging in", err);
  });
}
