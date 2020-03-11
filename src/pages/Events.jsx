import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function EventsList() {
  return (
    <>
      <Container fluid>
        <Row className="mt-5">
          <Col lg="1" className="offset-1">
            <h1 className="virticle-rl fs-xl">活動列表</h1>
          </Col>
          <Col lg="9">
            <h2 className="fs-xl">北部</h2>
            <Row></Row>
            <h2 className="fs-xl">中部</h2>
            <Row></Row>
            <h2 className="fs-xl">南部</h2>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
