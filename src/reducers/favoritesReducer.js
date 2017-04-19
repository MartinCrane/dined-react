export default (state={restaurants: []}, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      let fav = state.restaurants.concat(action.payload)
      return {restaurants: fav}
    default:
      return state
  }
}
