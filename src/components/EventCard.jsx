import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export default function EventCard({ className }) {
  return (
    <>
      <Card className={className}>
        <Card.Img variant="top" src="https://fakeimg.pl/600x300/" />
        <Card.Body className="px-3 py-2">
          <Card.Title className="mb-2 pb-2 pb-md-0 border-bottom border-bottom-md-0 fs-md fs-md-lg">
            <Link to="/events/id">半日茶師小旅行</Link>
          </Card.Title>
          <Card.Text className="d-none d-md-block fs-xs text-m">
            風華絕代五十年，山蔭長歌採茶人，香濃韻清照顏色 ......
          </Card.Text>
          <Card.Text className="d-flex justify-content-between fs-xs text-m">
            <Link to="/companys/和菓森林">和菓森林</Link>
            <span>
              <i className="fas fa-map-marker-alt fa-sm mr-1" />
              南投
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
