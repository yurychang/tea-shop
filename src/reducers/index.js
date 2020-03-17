import { combineReducers } from 'redux'
import events from './events'
import eventRegister from './eventRegister'

const rootReducer = combineReducers({
  events,
  eventRegister
})

export default rootReducer
