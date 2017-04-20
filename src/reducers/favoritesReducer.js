export default (state={restaurants: []}, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      let fav = state.restaurants.concat(action.payload)
      return {restaurants: fav}
    case "REMOVE_FROM_FAVORITES":
      let current = state.restaurants
      let newRest = current.filter(rest => rest.yelp_id != action.payload.yelp_id)
      return {restaurants: newRest}
    case "CLEAR_FAVORITES":
      return {restaurants: []}
    default:
      return state
  }
}
