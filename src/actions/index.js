import axios from 'axios'

export const getRestaurantsZip = (restuarant) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/${cocktail.id}`)
      .then(({data}) => {
        // 😇
        dispatch({type: "SET_CURRENT_COCKTAIL", restuarant: data})
      })
  }
}
