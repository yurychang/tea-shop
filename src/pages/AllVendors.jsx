import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import VendorList from 'components/vendor/VendorList'



function AllVendors() {
  useEffect(() => {

  }, [])

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
//   return bindActionCreators({ fetchEvents }, dispatch)
// }

export default (AllVendors)
