import axios from 'axios'

export const getRestaurantsZip = (rest) => {
    return axios(`http://localhost:4000/zip_view/2`, {
    method: 'post',
    headers: {
      Authorization: localStorage.jwt,
    }
  }).then(res => {
    debugger
  })
}
