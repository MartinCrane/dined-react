export const setFavorites = (response) => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload: response
  }
}
