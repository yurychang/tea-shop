import React from 'react'

import VendorBanner from '../components/vendor/VendorBanner'
import VendorNav from '../components/vendor/VendorNav'
import VendorInfo from '../components/vendor/VendorInfo'
import VendorEventArea from '../components/vendor/VendorEventArea'

function VendorEvent() {
  return (
    <>
      <VendorBanner />
      <VendorNav />
      <div className="vendorWrapper d-flex justify-content-around">
        <VendorInfo />
        <VendorEventArea />
      </div>
    </>
  )
}

export default VendorEvent
