import { FETCH_FLAVOR, TARGET_FLAVOR } from 'actions/flavor'

export default function flavor(state = {}, action) {
  switch (action.type) {
    case FETCH_FLAVOR:
      return {
        ...state,
        ...action.data
      }
    case TARGET_FLAVOR:
      return {
        ...state,
        targerFlavor: action.data
      }
    default:
      return state
  }
}
