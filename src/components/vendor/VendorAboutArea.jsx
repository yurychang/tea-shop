import React from 'react'
import { withRouter } from 'react-router-dom'

function VendorAboutArea(props) {

  return (
    <>
      <div className="aboutArea col-8 mt-3">
  <h3>關於 {props.vendorName}</h3>
        <div>
          {props.vendorAbout}
        </div>
      </div>
    </>
  )
}

export default VendorAboutArea
