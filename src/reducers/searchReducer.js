export default (state=[], action) => {
  switch (action.type) {

    case "ADD_RESULTS":
      return action.payload

    case "REMOVE_FROM_RESULTS":
      let results = state.filter((r) => r.yelp_id !== action.payload)
      return results

    case "CLEAR_RESULTS":
      return []

    default:
      return state
  }
}
