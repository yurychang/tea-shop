import React from 'react'

import VendorBanner from '../components/vendor/VendorBanner'
import VendorNav from '../components/vendor/VendorNav'
import VendorInfo from '../components/vendor/VendorInfo'
import VendorDiscountArea from '../components/vendor/VendorDiscountArea'

function VendorDiscount() {
  return (
    <>
      <VendorBanner />
      <VendorNav />
      <div className="vendorWrapper d-flex justify-content-around">
        <VendorInfo />
        <VendorDiscountArea />

      </div>
    </>
  )
}

export default VendorDiscount
