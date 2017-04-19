export const addToFavorites = (restaurant) =>{
    return {
      type: "ADD_TO_FAVORITES",
      payload: restaurant
    }
}
