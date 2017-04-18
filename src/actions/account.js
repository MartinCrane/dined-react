import axios from 'axios'

export const accountLogin = (account) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/login/${account}`)
      .then(({data}) => {
        // 😇
        dispatch({type: "AUTHENTICATE_USER", user: data})
      })
  }
}
