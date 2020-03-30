import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import VendorList from 'components/vendor/VendorList'
// import { connect } from 'react-redux'
// import { fetchvendordata } from 'actions/vendordata'
// import { bindActionCreators } from 'redux'


function AllVendors() {

  // useEffect(() => {
  //   fetchvendordata()
  // }, [])


  // console.log()

  return (
    <>
      <Container fluid className="pt-4 pt-lg-6">
        <Row>
          <Col lg="1" className="offset-lg-1">
            <h1 className="mb-3 vertical-lg-rl h2 text-ff">商家列表</h1>
          </Col>
          <Col lg="9">
            <VendorList />
          </Col>
        </Row>
      </Container>
    </>
  )
}

// const mapDispatchToProps = dispatch => {
//   const x = bindActionCreators(fetchvendordata, dispatch)
//   console.log(x)
//   return x
//}
// const props = {}
// const dispatch = {x: 'sdfs', y: 'hjgj'}
// const newP = {
//   ...props,
//   ...dispatch,
//   ...state
// }
// state = {
//   ...prop,
//   ...state
// }
// const newP = {
//   ...dispatch,
//   ...state
// }
export default (AllVendors)
