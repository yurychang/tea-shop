import { combineReducers } from 'redux'
import events from './events'
import zones from './zones'
import companys from './companys'
import flavor from './flavor'
import isLoading from './isLoading'

const rootReducer = combineReducers({
  events,
  zones,
  companys,
  flavor,
  isLoading
})

export default rootReducer
