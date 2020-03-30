import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import EventCard from './EventCard'
import { connect } from 'react-redux'

const Title = styled.h2`
  &:before {
    display: inline-block;
    content: '';
    width: 17px;
    height: 17px;
    margin-right: 0.5rem;
    padding: 2px;
    border: 1px solid #df641cba;
    border-radius: 50%;
    background: #df641cba;
    background-clip: content-box;
  }
`

function CardList({ events = [], title = '' }) {
  const mapEvents = data => {
    return data.map(event => {
      return (
        <Col key={event.id} md="4" className="mb-5">
          <EventCard {...event} />
        </Col>
      )
    })
  }
  return (
    <section>
      {title ? <Title className="h4 mb-4">{title}</Title> : null}
      <Row>{mapEvents(events)}</Row>
    </section>
  )
}

const mapStateToProps = ({ events: eventsData, zones }) => {
  let { filterType, filterId, filterName, data: events } = eventsData
  if (filterType === 'zone') {
    const zone = zones.find(zone => zone.zId.toString() === filterId.toString())
    const companysId = zone.companys.map(company => company.id)
    events = events.filter(event => companysId.includes(event.cId))
    return { events, title: `${filterName}部` }
  } else if (filterType === 'vendor') {
    events = events.filter(event => event.cId.toString() === filterId.toString())
    return { events, title: filterName }
  } else {
    return { events, title: filterName }
  }
}

export default connect(mapStateToProps)(CardList)
