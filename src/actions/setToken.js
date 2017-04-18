export const setToken = (jwt) => {
  debugger
  return {
    type: 'SET_TOKEN',
    payload: jwt
  }
}


// HOW IT WAS ----
//
// export default {
//   loginUser: (jwt) => {
//     debugger
//     // RouterContainer.get().transitionTo(‘/‘);
//     localStorage.setItem('jwt', jwt);
//     // Send the action to all stores through the Dispatcher
//
//     return {
//       actionType: 'AUTHENTICATE_USER',
//       jwt: jwt
//     }
//   }
// }
