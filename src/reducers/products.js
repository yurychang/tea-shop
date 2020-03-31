import { FETCH_PRODUCTS, SET_TEA_FILTER, SET_PRICE_FILTER, SET_INPUT_FILTER } from 'actions/products'

const defaultState = {
  filterTea: null,
  data: []
}

export default function companys(state = defaultState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        data: action.data
      }
    case SET_TEA_FILTER:
      let newFilter = ''
      if (state.filterTea !== action.filterTea) {
        newFilter = action.filterTea
      }
      return {
        ...state,
        filterTea: newFilter,
      }
    case SET_PRICE_FILTER:
      return {
        ...state,
        priceRange: action.priceRange
      }
    case SET_INPUT_FILTER:
      return {
        ...state,
        inputFilter: action.input
      }
    default:
      return state
  }
}
