export const FETCH_ZONES = 'FETCH_ZONES'

export const fetchZones = () => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:3333/zones/get')
      const json = await res.json()
      dispatch({
        type: FETCH_ZONES,
        zones: json.data
      })
    } catch (error) {
      console.log('err')
    }
  }
}