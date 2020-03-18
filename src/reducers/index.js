import { combineReducers } from 'redux'
import events from './events'
import eventRegister from './eventRegister'
import zones from './zones'
import companys from './companys'

const rootReducer = combineReducers({
  events,
  eventRegister,
  zones,
  companys
})

export default rootReducer
