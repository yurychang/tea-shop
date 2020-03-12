import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import EventCard from './EventCard'

function p(num, el) {
  const ary = []
  for (let i = 0; i < num; i++) {
    ary.push(el)
  }
  return ary
}

const Title = styled.h2`
  &:before {
    display: inline-block;
    content: '';
    width: 17px;
    height: 17px;
    margin-right: .5rem;
    padding: 2px;
    border: 1px solid #df641cba;
    border-radius: 50%;
    background: #df641cba;
    background-clip: content-box;
  }
`

export default function CategorySec({ ...props }) {
  return (
    <section
      className="d-flex flex-wrap justify-content-center justify-content-sm-start"
      {...props}
    >
      <Title className="h4 mb-4">和菓森林</Title>
      <Row>
        {p(
          15,
          <Col xl="3" md="4" xs="6">
            <EventCard className="mb-4" />
          </Col>
        )}
      </Row>
    </section>
  )
}
