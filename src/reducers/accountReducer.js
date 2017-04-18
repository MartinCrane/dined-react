export default (state={login: false}, action) => {
  debugger
  switch (action.type) {
    case "SET_LOGIN":
      return {login: action.payload}
    default:
      return state
  }
}
