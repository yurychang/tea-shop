import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import VendorBanner from '../components/vendor/VendorBanner'
import VendorNav from '../components/vendor/VendorNav'
import VendorInfo from '../components/vendor/VendorInfo'
import VendorAboutArea from '../components/vendor/VendorAboutArea'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchvendordata } from 'actions/vendordata'

function VendorAbout({ event = {}, fetchvendordata }) {
  useEffect(() => {
    fetchvendordata()
  }, [])
  return (
    <>
      <VendorBanner />
      <VendorNav />
      <div className="vendorWrapper d-flex justify-content-around">
        <VendorInfo {...event} />
        <VendorAboutArea />

      </div>
    </>
  )
}
const mapStateToProps =()=>{
  
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchvendordata }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VendorAbout))
