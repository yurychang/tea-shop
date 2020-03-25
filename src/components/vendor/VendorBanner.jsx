import React from 'react'
import ls_banner from '../../images/vendor/ls_banner.jpg'
import { withRouter } from 'react-router-dom'


function VendorBanner(props) {
  console.log('props',props)

  return (
    <>
    <div className="ls_banner">
        <img src={props.vendorBanner} alt="" />
      </div>
    </>
  )
}

export default  withRouter(VendorBanner)
