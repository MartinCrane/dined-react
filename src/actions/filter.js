

export const filterFavorites = (state, favorites) =>{

  let price = []
  let category =['food']
  let coordinates = {}

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

    function locationTest(lat, lng) {
      return lat < state.nLat && lat > state.sLat && lng > state.wLng && lng < state.eLng
    }

    if (price.length === 0 && !state.mapUse) {
      return favorites
    } else if (price.length !== 0 && !state.mapUse) {
      return favorites.filter((rest) => price.indexOf(rest.price) !== -1)
    } else if (price.length === 0 && state.mapUse) {
      return favorites.filter((rest) => locationTest(rest.latitude, rest.longitude))
    } else {
      let favByPrice = favorites.filter((rest) => price.indexOf(rest.price) !== -1)
      return favByPrice.filter((rest) => locationTest(rest.latitude, rest.longitude))
    }
}
