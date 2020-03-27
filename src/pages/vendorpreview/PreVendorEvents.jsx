import React, { useEffect, useState } from 'react'

import VendorBanner from '../../components/vendor/VendorBanner'
import PreVendorNav from '../../components/vendor/PreVendorNav'
import VendorInfo from '../../components/vendor/VendorInfo'
import VendorEventArea from '../../components/vendor/VendorEventArea'
import { withRouter } from 'react-router-dom'

function VendorEvent(props) {

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

  console.log('preview[0]', preview[0])
  return (
    <>
      <VendorBanner  {...preview[0]} />
      <PreVendorNav  {...preview[0]} />
      <div className="vendorWrapper d-flex justify-content-around">
        <VendorInfo  {...preview[0]} />
        <VendorEventArea  {...preview[0]} />
      </div>
    </>
  )
}

export default withRouter(VendorEvent)
