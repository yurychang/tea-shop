import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageTitle from 'utils/PageTitle'
import CardList from '../components/events/CardList'
import EventsFilter from '../components/events/EventsFilter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEvents } from 'actions/events'

function EventsList({ fetchEvents, events, vendor }) {
  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <>
      <Container fluid className="pt-4 pt-lg-6">
        <Row>
          <Col lg="1" className="offset-lg-1">
            <PageTitle>活動列表</PageTitle>
          </Col>
          <Col lg="9">
            <EventsFilter className="d-none d-md-block mb-5" />
            <CardList />
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchEvents }, dispatch)
}

export default connect(null, mapDispatchToProps)(EventsList)
