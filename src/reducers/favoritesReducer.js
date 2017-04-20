export default (state={restaurants: []}, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      let new_array = state.restaurants.filter((res)=> res.id !== action.payload.id)
      let fav = new_array.concat(action.payload)
      return {restaurants: fav}

    case "CLEAR_FAVORITES":
      return {restaurants: []}
    default:
      return state
  }
}
