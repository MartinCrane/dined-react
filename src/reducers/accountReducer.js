export default (state={login: false}, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {login: action.payload}
    case "REGISTER":
      return {login: action.payload}
    default:
      return state
  }
}
