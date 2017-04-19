export default (state={restaurants: []}, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      let fav = state.restaurants.concat(action.payload)
      return {restaurants: fav}
    case "CLEAR_FAVORITES":
      return {restaurants: []}
    default:
      return state
  }
}
