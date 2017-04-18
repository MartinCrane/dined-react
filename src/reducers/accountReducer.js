export default (state=[], action) => {
  switch (action.type) {
    case "AUTHENTICATE_USER":
      return [user: action.user]
    default:
      return state
  }
}
