export const FETCH_FAVORITES = 'FETCH_FAVORITES'

export const fetchFavorites = () => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:3333/favorite/get')
      const json = await res.json()
      dispatch({
        type: FETCH_FAVORITES,
        data: json.data
      })
    } catch (error) {
      console.log('err')
    }
  }
}

export const addFavorites = id => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:3333/favorite/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ pId: id }),
      })
      const json = await res.json()
      dispatch({
        type: FETCH_FAVORITES,
        data: json.data
      })
    } catch (error) {
      console.log('err')
    }
  }
}
