import { combineReducers } from 'redux'
import events from './events'
import zones from './zones'
import companys from './companys'
import flavor from './flavor'
import isLoading from './isLoading'
import vendordata from './allvendordata'
import favorites from './favorites'
import products from './products'

const rootReducer = combineReducers({
  events,
  zones,
  companys,
  vendordata,
  flavor,
  isLoading,
  favorites,
  products
})

export default rootReducer
