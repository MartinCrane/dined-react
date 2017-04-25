
const foreignApi = 'https://mysterious-meadow-52290.herokuapp.com/'
const localApi = 'http://localhost:4000/'

export const addToFavorites = (restaurant) =>{
  return {
    type: "ADD_TO_FAVORITES",
    payload: restaurant
  }
}

export const removeFromFavorites = (restaurant) =>{
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: restaurant
  }
}

export const clearFavorites = () =>{
  return {
    type: "CLEAR_FAVORITES"
  }
}

export const updateAddFavoritesServer = (restaurant) => {
  let stringRest = JSON.stringify(restaurant)
  return fetch(foreignApi + `add_favorites`, {
    method: 'post',
    headers: {
      Authorization: `${localStorage.jwt}`,
    },
    body: stringRest
  })
}

export const updateDeleteFavoritesServer = (restaurant) => {
  return fetch(foreignApi + `delete_favorites`, {
    method: 'post',
    headers: {
      Authorization: `${localStorage.jwt}`,
    },
    body: `${restaurant.yelp_id}`
  })
}
