import { TOGGLE_FILTER, FETCH_EVENTS, REGISTER_SUCCESS, REGISTER_FAIL, REGISTERMODAL_OPEN, REGISTERMODAL_CLOSE } from 'actions/events'

const dafault = {
  filterType: null,
  filterId: null,
  registerStatus: null,
  registerData: {},
  isModalOpen: false,
  data: []
}

export default function events(state = dafault, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        filterType: action.filterType,
        filterId: action.filterId,
        filterName: action.filterName
      }
    case FETCH_EVENTS:
      return {
        ...state,
        data: action.data
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerStatus: true,
        registerData: action.data
      }
    case REGISTER_FAIL:
      return {
        ...state,
        registerStatus: false,
        registerData: null
      }
    case REGISTERMODAL_OPEN:
      return {
        ...state,
        isModalOpen: true
      }
    case REGISTERMODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
        registerData: {}
      }
    default:
      return state
  }
}
