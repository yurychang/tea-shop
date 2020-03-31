import { loadingStart, loadingEnd } from 'actions/loading'

export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const FETCH_EVENTS = 'FETCH_EVENTS'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const REGISTERMODAL_OPEN = 'REGISTERMODAL_OPEN'
export const REGISTERMODAL_CLOSE = 'REGISTERMODAL_CLOSE'
export const FETCH_Product = 'FETCH_Product'

export const toggleFilter = (type, id, name) => {
  return {
    type: TOGGLE_FILTER,
    filterType: type, // zone or vendor
    filterId: id,
    filterName: name,
  }
}

export const fetchEvents = () => {
  return async dispatch => {
    dispatch(loadingStart())
    try {
      const res = await fetch('http://localhost:3333/events/get')
      const json = await res.json()
      if (json.status === 'success') {
        dispatch({
          type: FETCH_EVENTS,
          data: json.data,
        })
      }
    } catch (error) {
      console.log(error)
    }
    dispatch(loadingEnd())
  }
}

export const postRegisterForm = formValues => {
  return async dispatch => {
    dispatch(loadingStart())
    try {
      const res = await fetch('http://localhost:3333/events/register/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })
      const json = await res.json()
      if (json.status === 'success') {
        dispatch({
          type: REGISTER_SUCCESS,
          data: json.data,
        })
      } else {
        dispatch({
          type: REGISTER_FAIL,
        })
      }
      dispatch({
        type: REGISTERMODAL_OPEN,
      })
    } catch (error) {
      console.log(error)
    }
    dispatch(loadingEnd())
  }
}

export const closeModal = () => {
  return {
    type: REGISTERMODAL_CLOSE,
  }
}

// export const fetchCompanys = () => {
//   return async dispatch => {
//     try {
//       const res = await fetch('http://localhost:3333/events/getCompanys')
//       const json = await res.json()
//       if (json.status === 'success') {
//         dispatch({
//           type: FETCH_COMPANYS,
//           data: json.data
//         })
//       }
//     } catch (error) {
//       console.log('err')
//     }
//   }
// }
// export const fetchProduct = () => {
//   return {
//     type: "FETCH_Product",
//     value:data,
//   }
// }

// export const fetchProductAsync = () => {
//   return async dispatch => {
//     dispatch(loadingStart())
//     try {
//       const res = await fetch('http://localhost:3333/product/try-get')
//       const json = await res.json()
//       console.log(json)
//       if (json.status === 'success') {
//         dispatch({
//           type: FETCH_Product,
//           data: json.data,
//         })
//       }
//     } catch (error) {
//       console.log(error)
//     }
//     dispatch(loadingEnd())
//   }
// }
