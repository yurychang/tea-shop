export const FETCH_VENDORDATA = 'FETCH_VENDORDATA'

export const fetchvendordata = () => {
  return async dispatch => {
    try {
      //前端取得特定廠商頁面
      const res = await fetch('http://localhost:3333/vendor/getvendorpage')
      const json = await res.json()
      dispatch({
        type: FETCH_VENDORDATA,
        data: json.data
      })
    } catch (error) {
      console.log('err')
    }
  }
}