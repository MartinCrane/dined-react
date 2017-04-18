export const setLogin = (jwt) => {
  return {
    type: 'SET_LOGIN',
    payload: true
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
