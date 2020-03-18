import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import EventCard from './EventCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleFilter } from 'actions/events'

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

function CardList({ events }) {
  const mapEvents = data => {
    return data.map(event => {
      return (
        <Col key={event.id} xs="6" md="4">
          <EventCard {...event} />
        </Col>
      )
    })
  }
  return (
    <section>
      <Title className="h4 mb-4">和菓森林</Title>
      <Row>{mapEvents(events)}</Row>
    </section>
  )
}

const mapStateToProps = ({ events }) => {
  return { events: events.data }
}

export default connect(mapStateToProps)(CardList)
