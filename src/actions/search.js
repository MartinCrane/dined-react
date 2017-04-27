export const formatResults = (array) => {
  let results = []
  array.businesses.forEach((object) => {
    let price = null
    if (!!object.price) {
      price = object.price.length
    }
    let newRest = {
      name: object.name,
      rating: object.rating,
      price: price,
      yelp_id: object.id,
      latitude: object.coordinates.latitude,
      longitude: object.coordinates.longitude,
      image_url: object.image_url,
      address: object.location.display_address[0] + " " + object.location.display_address[1],
      city: object.location.city,
      state: object.location.state,
      country: object.location.country,
      zip_code: object.location.zip_code,
      distance: object.distance,
    }
    results.push(newRest)
  })
  return results
}

export const search = (submission, favorites) =>{
  fetch(`http://localhost:4000/${submission}`,
    {
    method: 'get',
    headers: {
      Authorization: `${localStorage.jwt}`
    },
    data: "gold"
  }).then(res => res.json())
    .then(res => {
      let resultsFormatted = formatResults(res)
      let favorites_id = favorites.map((fav)=> {return fav.yelp_id})
      let new_array = resultsFormatted.filter((r)=> !favorites_id.includes(r.yelp_id))
      return new_array
    })
  }
