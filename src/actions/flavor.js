import { loadingStart, loadingEnd } from 'actions/loading'

export const FETCH_FLAVOR = 'FETCH_FLAVOR'
export const SELECT_BY_FLAVOR = 'SELECT_BY_FLAVOR'
export const SELECT_BY_TEA = 'SELECT_BY_TEA'

export const fetchFlavor = () => {
  return async dispatch => {
    dispatch(loadingStart())
    try {
      const res = await fetch('http://localhost:3333/flavor/get')
      const json = await res.json()
      if (json.status === 'success') {
        dispatch({
          type: FETCH_FLAVOR,
          data: json.data
        })
      }
    } catch (error) {
      console.log(error)
    }
    dispatch(loadingEnd())
  }
}

export const selectByFlavor = id => {
  return {
    type: SELECT_BY_FLAVOR,
    id
  }
}

export const selectByTea = id => {
  return {
    type: SELECT_BY_TEA,
    id
  }
}
