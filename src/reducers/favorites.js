import { FETCH_FAVORITES } from 'actions/favorites'

export default function favorites(state = [], action) {
  switch (action.type) {
    case FETCH_FAVORITES:
      return [
        ...action.data
      ]
    default:
      return state
  }
}