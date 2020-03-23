import React from 'react'

import VendorBanner from '../components/vendor/VendorBanner'
import VendorNav from '../components/vendor/VendorNav'
import VendorInfo from '../components/vendor/VendorInfo'
import VendorProduct from '../components/vendor/VendorProduct'

// const searchParams = new URLSearchParams(props.location.search)
// const vendorid = searchParams.get('id')

function VendorIndex() {
  return (
    <>
      <VendorBanner />
      <VendorNav />
      <div className="vendorWrapper d-flex justify-content-around">
        <VendorInfo/>
        <VendorProduct />
      </div>
    </>
  )
}

export default VendorIndex
