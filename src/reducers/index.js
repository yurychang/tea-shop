import { combineReducers } from 'redux'
import events from './events'
import eventRegister from './eventRegister'
import zones from './zones'
import companys from './companys'
import isLoading from './isLoading'

const rootReducer = combineReducers({
  events,
  eventRegister,
  zones,
  companys,
  isLoading
})

export default rootReducer
