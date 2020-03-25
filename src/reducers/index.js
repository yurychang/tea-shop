import { combineReducers } from 'redux'
import events from './events'
import zones from './zones'
import companys from './companys'
import flavor from './flavor'
import isLoading from './isLoading'
import vendordata from './allvendordata'

const rootReducer = combineReducers({
  events,
  zones,
  companys,
  vendordata,
  flavor,
  isLoading
})

export default rootReducer
