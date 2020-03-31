import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function BackendDiscount() {


  const [locationData, setLocationData] = useState([])

  async function getDataFromServer() {

    const request = new Request('http://localhost:3333/vendor/getvendorbacklocation', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data);
    setLocationData(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  const locationlist = (<>
    {locationData.map((value, index) => {
      return (
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between">
            <div className="account">{value.locationName}
            </div>

          </div>
          <div className="card-body d-flex justify-content-between align-items-center">

            <div className="Msg">
              {value.locationAddress}
            </div>
            <button className="btn btn-main" >編輯據點</button>

          </div>
        </div>
      )

    })}
  </>)





  return (
    <>
      <div className="content">
        <h3>據點管理</h3>
        <hr />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary mb-4 ">新增據點</button>
        </div>


        {locationlist}

      </div>





    </>
  )
}

export default BackendDiscount