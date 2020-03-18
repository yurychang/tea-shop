import { FETCH_ZONES } from 'actions/zones'

export default function events(state = [], action) {
  switch (action.type) {
    case FETCH_ZONES:
      const zones = action.zones.sort((a, b) => +a.zId - +b.zId)
      return [ ...zones ]
    default:
      return state
  }
}