export const FETCH_FLAVOR = 'FETCH_FLAVOR'
export const TARGET_FLAVOR = 'TARGET_FLAVOR'

export const fetchFlavor = () => {
  return async dispatch => {
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
      console.log('err')
    }
  }
}

export const targetFlavor = id => {
  return {
    type: TARGET_FLAVOR,
    id
  }
}
