

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
  return fetch(`http://localhost:4000/add_favorites`, {
    method: 'post',
    headers: {
      Authorization: `${localStorage.jwt}`,
    },
    body: `${restaurant.yelp_id}`
  })
}

export const updateDeleteFavoritesServer = (restaurant) => {
  return fetch(`http://localhost:4000/add_favorites`, {
    method: 'post',
    headers: {
      Authorization: `${localStorage.jwt}`,
    },
    body: `${restaurant.yelp_id}`
  })
}
