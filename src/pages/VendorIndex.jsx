import React from 'react'

import VendorBanner from '../components/vendor/VendorBanner'
import VendorNav from '../components/vendor/VendorNav'
import VendorInfo from '../components/vendor/VendorInfo'
import VendorAbout from '../components/vendor/VendorAbout'

function VendorIndex() {
  return (
    <>
      <VendorBanner />
      <VendorNav />
      <div className="vendorWrapper d-flex justify-content-around">
        <VendorInfo />
        <VendorAbout />

      </div>
    </>
  )
}

export default VendorIndex
