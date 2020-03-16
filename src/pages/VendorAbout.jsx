import React from 'react'

import VendorBanner from '../components/vendor/VendorBanner'
import VendorNav from '../components/vendor/VendorNav'
import VendorInfo from '../components/vendor/VendorInfo'
import VendorAboutArea from '../components/vendor/VendorAboutArea'

function VendorAbout() {
  return (
    <>
      <VendorBanner />
      <VendorNav />
      <div className="vendorWrapper d-flex justify-content-around">
        <VendorInfo />
        <VendorAboutArea />

      </div>
    </>
  )
}

export default VendorAbout
