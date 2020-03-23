import { combineReducers } from 'redux'
import events from './events'
import zones from './zones'
import companys from './companys'
import isLoading from './isLoading'
import vendordata from './vendordata'

const rootReducer = combineReducers({
  events,
  zones,
  companys,
  isLoading,
  vendordata
})

export default rootReducer
