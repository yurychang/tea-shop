import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

// const searchParams = new URLSearchParams(props.location.search)
// const id = searchParams.get('id')

function VendorList() {
  const [alldata, setAlldata] = useState([])

  async function getDataFromServer() {
    const request = new Request('http://localhost:3333/vendor/getallvendor', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setAlldata(data)
    sessionStorage.setItem('vendorId', data[0].id)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  const singlevendor = (
    <>
      {alldata.map((value, index) => {
        return (
          <div className="card ls_singlevendor mr-3 mt-2">
            <div className="ls_allstore-img">
              <img className="" src={value.vendorImg} alt="" />
            </div>
            <div className="card-body">
              <Link to={`/vendor/${value.id}/index`}>
                <h6 className="">{value.vendorName}</h6>
              </Link>
              <div className="product-pretext mb-2">{value.Zone}</div>
            </div>
          </div>
        )
      })}
    </>
  )

  return (
    <>
      <div className="container d-flex flex-wrap">{singlevendor}</div>
    </>
  )
}

export default withRouter(VendorList)
