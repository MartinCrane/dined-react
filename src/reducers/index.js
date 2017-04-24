import {combineReducers} from 'redux'
import accountReducer from './accountReducer'
import favoritesReducer from './favoritesReducer'
import navigationReducer from './navigationReducer'
import searchReducer from './searchReducer'
import mapReducer from './mapReducer'


export default combineReducers({
  account: accountReducer,
  favorites: favoritesReducer,
  navigation: navigationReducer,
  map: mapReducer,
  search: searchReducer
})
