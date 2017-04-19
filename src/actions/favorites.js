import axios from 'axios'

export const addToFavorites = (restaurant) =>{
  return {
    type: "ADD_TO_FAVORITES",
    payload: restaurant
  }
}

export const updateFavoritesServer = (restaurant) => {
  return fetch(`http://localhost:4000/`, {
    method: 'post',
    headers: {
      Authorization: `${localStorage.jwt}`,
    },
    body: `${restaurant.yelp_id}`
  })
}

export const clearFavorites = () =>{
  return {
    type: "CLEAR_FAVORITES"
  }
}
