import React, { useState,useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import VendorBanner from '../../components/vendor/VendorBanner'
import PreVendorNav from '../../components/vendor/PreVendorNav'
import VendorInfo from '../../components/vendor/VendorInfo'
import VendorAboutArea from '../../components/vendor/VendorAboutArea'


function VendorAbout(props) {
  const [preview, setPreviewdata] = useState([])

  const getvendoronlyid = Number(props.match.params.id)
  console.log(getvendoronlyid)

  async function getDataFromServer() {

    const request = new Request('http://localhost:3333/vendor/previewvendor/' + getvendoronlyid, {
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

  console.log('preview',preview)
  console.log('preview[0]',preview[0])

  return (
    <>
      <VendorBanner {...preview[0]}/>
      <PreVendorNav {...preview[0]}/>
      <div className="vendorWrapper d-flex justify-content-around">
        <VendorInfo  {...preview[0]}/>
        <VendorAboutArea {...preview[0]}/>

      </div>
    </>
  )
}


export default withRouter(VendorAbout)
