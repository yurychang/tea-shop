import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from 'react-bootstrap'
import { fetchEvents } from 'actions/events'
import EventInfo from 'components/event/EventInfo'
import Menu from 'components/event/Menu'
import RegistForm from 'components/event/RegistForm'

function Event({ event = {}, fetchEvents }) {
  const { title, price, location } = event
  useEffect(() => {
    fetchEvents()
  }, [])
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
            <EventInfo {...event} />
            <RegistForm title={title} price={price} location={location} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = ({ events }, { match }) => {
  const { params } = match
  const event = events.data.find(
    event => event.id.toString() === params.id.toString()
  )
  return { event }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchEvents }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Event))
