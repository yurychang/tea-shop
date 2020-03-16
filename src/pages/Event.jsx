import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EventsInfo from 'components/event/EventsInfo'
import Menu from 'components/event/Menu'
import RegistRegion from 'components/event/RegistRegion'

export default function Event() {
  return (
    <>
      <Container fluid className="pt-4 pt-lg-6 pb-4 pb-lg-7">
        <Row>
          <Col lg="1" className="offset-xl-1">
            <h1 className="mb-3 vertical-lg-rl h2 text-ff">和菓森林</h1>
          </Col>
          <Col lg="3" xl="2" className="mb-3 text-center-lg">
            <Menu />
          </Col>
          <Col lg="7" xl="6">
            <EventsInfo />
            <RegistRegion />
          </Col>
        </Row>
      </Container>
    </>
  )
}
