export default (state={center: {lat: 40.762366, lng: -73.983886}}, action) => {
  switch (action.type) {

    case "SET_Location":
      return action.payload

    default:
      return state
  }
}
