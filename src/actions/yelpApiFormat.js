export const formatResults = (array) => {
  let results = []
  array.businesses.forEach((object) => {
    let newRest = {
      name: object.name,
      rating: object.rating,
      price: object.price,
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

export const formatApiCallString = (submission) => {
  let apiSplit = '@$@$@'
  let string = 'term' + apiSplit + submission.term + apiSplit + 'category' + apiSplit + submission.category
  if (!!submission.location) {
    string = string + apiSplit + 'location' + apiSplit + submission.location
  }
  if (!!submission.price) {
    string = string + apiSplit + 'price' + apiSplit + submission.price
  }
  if (!!submission.latitude) {
    string = string + apiSplit + 'latitude' + apiSplit + submission.latitude
  }
  if (!!submission.longitude) {
    string = string + apiSplit + 'longitude' + apiSplit + submission.longitude
  }
  return string
}
