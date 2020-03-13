import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sections from '../components/events/Sections'
import EventsFilter from '../components/events/EventsFilter'

export default function EventsList() {
  return (
    <>
      <Container fluid className="pt-4 pt-lg-6">
        <Row>
          <Col lg="1" className="offset-lg-1">
            <h1 className="mb-3 vertical-lg-rl h2 text-ff">活動列表</h1>
          </Col>
          <Col lg="9">
            <EventsFilter className="d-none d-lg-block"/>
            <Sections />
          </Col>
        </Row>
      </Container>
    </>
  )
}
