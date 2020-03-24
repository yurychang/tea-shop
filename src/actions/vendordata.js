import { loadingStart, loadingEnd } from 'actions/loading'
export const FETCH_SINGLEVENDORDATA = 'FETCH_SINGLEVENDORDATA'
export const FETCH_VENDORDATA = 'FETCH_VENDORDATA'

export const fetchsinglevendordata = (id) => {
  return async dispatch => {
    try {
      //前端取得特定廠商頁面
      const res = await fetch('http://localhost:3333/vendor/getvendorpage')
      const json = await res.json()
      dispatch({
        type: FETCH_SINGLEVENDORDATA,
        data: json.data,

      })
    } catch (error) {
      console.log('err')
    }
  }
}

export const fetchvendordata = () => {
  return async dispatch => {
    try {
      //前端取得廠商列表頁面
      const res = await fetch('http://localhost:3333/vendor/getallvendor')
      const json = await res.json()
      dispatch({
        type: FETCH_VENDORDATA,
        data: json.data,
      })
    } catch (error) {
      console.log('err')
    }
  }
}