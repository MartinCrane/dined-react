import {combineReducers} from 'redux'
import accountReducer from './accountReducer'
import favoritesReducer from './favoritesReducer'


export default combineReducers({
  account: accountReducer,
  favorites: favoritesReducer
})
