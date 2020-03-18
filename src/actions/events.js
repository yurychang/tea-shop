export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const FETCH_EVENTS = 'FETCH_EVENTS'

export const toggleFilter = (type, id) => {
  return {
    type: TOGGLE_FILTER,
    filterType: type, // zone or vendor
    filterId: id
  } // id
}

export const fetchEvents = () => {
  return async dispatch => {
    const res = await fetch('http://localhost:3333/events/get')
    const data = await res.json()
    console.log('fetch')
    dispatch({
      type: FETCH_EVENTS,
      data
    })
  }
}
