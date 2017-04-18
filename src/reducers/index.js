import {combineReducers} from 'redux'

import AccountReducer from './accountReducer'
import CurrentCocktailReducer from './currentCocktailReducer'

export default combineReducers({
  account: accountReducer,
  currentCocktail: CurrentCocktailReducer
})
