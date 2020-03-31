export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const SET_TEA_FILTER = 'SET_TEA_FILTER'
export const SET_PRICE_FILTER = 'SET_PRICE_FILTER'
export const SET_INPUT_FILTER = 'SET_INPUT_FILTER'

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const request = new Request('http://localhost:3333/product/try-get', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
        }),
      })

      const res = await fetch(request)
      const data = await res.json()

      dispatch({
        type: FETCH_PRODUCTS,
        data
      })
    } catch (error) {
      console.log('err')
    }
  }
}

export const setTeaFilter = teaTypeId => {
  return {
    type: SET_TEA_FILTER,
    filterTea: teaTypeId
  }
}

export const setPriceFilter = range => {
  return {
    type: SET_PRICE_FILTER,
    priceRange: range
  }
}

export const setInputFilter = input => {
  return {
    type: SET_INPUT_FILTER,
    input: input
  }
}
