import { FETCH_VENDORDATA } from 'actions/vendordata'

export default function vendordata(state = [], action) {
  switch (action.type) {
    case FETCH_VENDORDATA:
      return [ ...action.data ]
    default:
      return state
  }
}
