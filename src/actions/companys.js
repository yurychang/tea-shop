export const FETCH_COMPANYS = 'FETCH_COMPANYS'

export const fetchCompanys = () => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:3333/companys/get')
      const data = await res.json()
      dispatch({
        type: FETCH_COMPANYS,
        data
      })
    } catch (error) {
      console.log('err')
    }
  }
}