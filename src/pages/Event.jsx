import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EventsInfo from 'components/event/EventsInfo'
import List from 'components/event/List'
import RegistForm from 'components/event/RegistForm'

export default function Event() {
  return (
    <>
      <Container fluid className="pt-4 pt-lg-6">
        <Row>
          <Col lg="1" className="offset-lg-1">
            <h1 className="mb-3 vertical-lg-rl h2 text-ff">和菓森林</h1>
          </Col>
          <Col lg="2" className="text-center">
            <List />
          </Col>
          <Col lg="6">
            <EventsInfo />
            <RegistForm />
          </Col>
        </Row>
      </Container>
    </>
  )
}
