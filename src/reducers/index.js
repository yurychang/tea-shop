import { combineReducers } from 'redux'
import events from './events'
import zones from './zones'
import companys from './companys'
import isLoading from './isLoading'

const rootReducer = combineReducers({
  events,
  zones,
  companys,
  isLoading
})

export default rootReducer
