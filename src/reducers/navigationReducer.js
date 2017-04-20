export default (state='favorites', action) => {
  switch (action.type) {
    case "SELECT_NAVIGATION":
      return action.payload
    default:
      return state
  }
}
