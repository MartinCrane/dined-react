import {combineReducers} from 'redux'
import accountReducer from './accountReducer'
import favoritesReducer from './favoritesReducer'
import navigationReducer from './navigationReducer'


export default combineReducers({
  account: accountReducer,
  favorites: favoritesReducer,
  navigation: navigationReducer
})
