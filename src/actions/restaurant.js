export const price_function = (price) => {
  switch (price) {
    case price = "":
      return "N/A"
      break;
    case price = 1:
      return "$"
      break;
    case price = 2:
      return "$$"
      break;
    case price = 3:
      return "$$$"
      break;
    case price = 4:
      return "$$$$"
      break;
    default:
        return "N/A"
  }
}
