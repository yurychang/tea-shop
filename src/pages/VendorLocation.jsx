import React, { useEffect, useState } from 'react'

import VendorBanner from '../components/vendor/VendorBanner'
import VendorNav from '../components/vendor/VendorNav'
import VendorInfo from '../components/vendor/VendorInfo'
import VendorLocationArea from '../components/vendor/VendorLocationArea'

import { withRouter } from 'react-router-dom'

function VendorDiscount(props) {

  const [preview, setPreviewdata] = useState([])


  const getvendorid = Number(props.match.params.id)
  sessionStorage.setItem('vendorId', getvendorid)

  console.log('[ID]', getvendorid)

  async function getDataFromServer() {

    const request = new Request('http://localhost:3333/vendor/previewvendor/' + getvendorid, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data);
    setPreviewdata(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])


  return (
    <>
      <VendorBanner {...preview[0]} />
      <VendorNav {...preview[0]} />
      <div className="vendorWrapper d-flex justify-content-around">
        <VendorInfo {...preview[0]} />
        <VendorLocationArea {...preview[0]} />

      </div>
    </>
  )
}

export default withRouter(VendorDiscount)
