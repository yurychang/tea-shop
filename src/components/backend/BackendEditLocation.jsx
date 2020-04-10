import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

 function BackendEditLocation(props) {
  //   const [vendorId, setVendorId] = useState('')
  const [locationName, setLocationName] = useState('')
  const [locationAddress, setLocationAddress] = useState('')
  const [locationPhone, setLocationPhone] = useState('')
  // const vendorId = sessionStorage.getItem('vendorOnlyId')
  // const locationData = { locationName, locationAddress, locationPhone }
  // console.log(locationData)

  let locationid = Number(props.match.params.id)
  console.log(locationid)

  //   return ()

  async function getLocation() {

    const request = new Request('http://localhost:3333/vendor/getvendoronelocation/' + locationid, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('data',data)
    setLocationName(data[0].locationName)
    setLocationAddress(data[0].locationAddress)
    setLocationPhone(data[0].locationPhone)

  }

  useEffect(() => {
    getLocation()
  }, [])


  //更新資料
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   sendLocationDataToServer(locationData, () => alert('更新據點成功'))

  //   async function sendLocationDataToServer(locationData, callback) {
  //     const request = new Request(
  //       'http://localhost:3333/vendor/addvendorlocation',
  //       {
  //         method: 'POST',
  //         credentials: 'include',
  //         body: JSON.stringify(locationData),
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     )
  //     const response = await fetch(request)
  //     console.log('response', response)
  //     const data = await response.json()
  //     callback()
  //   if (data) {
  //     return (
  //       <>
  //         <Redirect to="/dashboard/msg" />
  //       </>
  //     )
  //   }
  // }
  // }

  //   function delLocation() {
  //   const request = new Request('http://localhost:3333/vendor/delvendorlocation/' + locationid, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'appliaction/json',
  //     }),
  //   })
  //   const response = fetch(request)
  //   const data = response.json()
  //   alert('已刪除據點')
  // }


  return (
    <>
      <div className="content">
        <h3>據點管理</h3>
        <hr />
        <h5 className="text-center">新增據點</h5>
        <div className="d-flex justify-content-end">
          <Link className="btn btn-primary mb-2" to="/dashboard/location">
            回上頁
          </Link>
        </div>

        <form>
          <div className="form-group">
            <label>據點名稱</label>
            <input
              type="text"
              className="form-control"
              name="locationName"
              value={locationName}
              onChange={e => setLocationName(e.target.value)}
              required="required"
            />
          </div>

          <div className="mb-3">
            <label for="validationTextarea">據點地址</label>
            <input
              type="text"
              className="form-control"
              value={locationAddress}
              name="locationAddress"
              onChange={e => setLocationAddress(e.target.value)}
              required="required"
            />
          </div>


          <div className="mb-3">
            <label for="validationTextarea">據點電話</label>
            <input
              type="text"
              className="form-control"
              value={locationPhone}
              name="locationPhone"
              onChange={e => setLocationPhone(e.target.value)}
              required="required"
            />
          </div>

          <button
            type="submit"
            className="btn btn-main col-3 mb-3 mr-2"
          >
            更新據點
          </button>

          <button
            type="submit"
            className="btn btn-danger col-3 mb-3"
            
          >
            刪除據點
          </button>
        </form>
      </div>
    </>
  )
}

export default withRouter(BackendEditLocation)
