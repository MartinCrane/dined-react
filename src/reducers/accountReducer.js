export default (state=[], action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {jwt: action.payload}
    default:
      return state
  }
}
