import { combineReducers } from 'redux'
import events from './events'
import zones from './zones'
import companys from './companys'
import flavor from './flavor'
import isLoading from './isLoading'
import vendordata from './allvendordata'
import favorites from './favorites'

const rootReducer = combineReducers({
  events,
  zones,
  companys,
  vendordata,
  flavor,
  isLoading,
  favorites
})

export default rootReducer
