import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from 'react-bootstrap'
import { fetchEvents } from 'actions/events'
import { fetchCompanys } from 'actions/companys'
import EventInfo from 'components/event/EventInfo'
import Menu from 'components/event/Menu'
import RegistForm from 'components/event/RegistForm'

function Event({ event = {}, companyEvents, fetchEvents, fetchCompanys }) {
  const { title, price, location } = event
  useEffect(() => {
    fetchEvents()
    fetchCompanys()
  }, [])
  return (
    <>
      <Container fluid className="pt-4 pt-lg-6 pb-4 pb-lg-7">
        <Row>
          <Col lg="1" className="offset-xl-1">
            <h1 className="mb-3 vertical-lg-rl h2 text-ff">
              {event.company?.username}
            </h1>
          </Col>
          <Col lg="3" xl="2" className="mb-3 text-center-lg">
            <Menu data={companyEvents} />
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

const mapStateToProps = ({ events, companys }, { match }) => {
  const { params } = match
  let cId = ''
  let companyEvents = []
  let event = {}
  for (let i = 0; i < events.data.length; i++) {
    const el = events.data[i]
    if (el.id.toString() === params.id.toString()) {
      event = el
      cId = event.cId
    }
  }
  events.data.forEach(el => {
    if (el.cId.toString() === cId.toString()) {
      companyEvents.push(el)
    }
  })
  return { event, companyEvents }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchEvents, fetchCompanys }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Event))
