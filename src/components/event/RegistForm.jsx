import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function RegistForm() {
  return (
    <form>
      <caption></caption>
      <Row>
        <Col>
          <label htmlFor=""></label>
          <input type="text" />
        </Col>
        <Col>
          <label htmlFor=""></label>
          <input type="text" />
        </Col>
      </Row>
      <label htmlFor=""></label>
      <input type="text" />
      <div className="submit"></div>
    </form>
  )
}
