import { FETCH_COMPANYS } from 'actions/companys'

export default function companys(state = [], action) {
  switch (action.type) {
    case FETCH_COMPANYS:
      return [ ...action.data ]
    default:
      return state
  }
}
