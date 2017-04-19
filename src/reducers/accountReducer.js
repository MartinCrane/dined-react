export default (state={login: false, email: ''}, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return action.payload
    default:
      return state
  }
}
