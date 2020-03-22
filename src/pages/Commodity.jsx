import React from 'react'
import CommodityImg from '../components/pj_event/CommodityImg'
import CommoditInformation from '../components/pj_event/CommoditInformation'
import ProductReviews from '../components/pj_event/ProductReviews'

function Commodity() {
  return (
    <>
      <div className="container pj_container py-4">
        <div className="mb-4">
          <div className="row">
            <div className="col-md-6">
              <CommodityImg />
            </div>
            <div className="col-md-6">
              <CommoditInformation />
            </div>
          </div>
        </div>
        <ProductReviews />
      </div>
    </>
  )
}
export default Commodity
