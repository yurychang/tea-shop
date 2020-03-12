import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EventsStack from '../components/event/EventsStack'
import EventsFilter from '../components/event/EventsFilter'

export default function EventsList() {
  return (
    <>
      <Container fluid>
        <Row className="mt-5">
          <Col lg="1" className="offset-1">
            <h1 className="vertical-rl h2 text-ff">活動列表</h1>
          </Col>
          <Col lg="9">
            <EventsFilter />
            <EventsStack />
          </Col>
        </Row>
      </Container>
    </>
  )
}
