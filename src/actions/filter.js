export const filterFavorites = (state, favorites) =>{
  let price = []
  let category =['food']

    if (!!state.price1) {
      price.push(1)
      price.push(1.5)
    }
    if (!!state.price2) {
      price.push(2)
      price.push(2.5)
    }
    if (!!state.price3) {
      price.push(3)
      price.push(3.5)
    }
    if (!!state.price4) {
      price.push(4)
    }
    if (!!state.userCategoryA) {
    }
    if (!!state.userCategoryB) {
    }
    if (!!state.userCategoryC) {
    }
    if (!!state.userCategoryD) {
    }

    if (price.length === 0) {
      return favorites
    } else {
      return favorites.filter((rest) => price.indexOf(rest.price) !== -1)
    }

}
