import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export default function EventCard({
  title,
  location,
  companys = {},
  id,
  banner,
  intro,
}) {
  return (
    <>
      <Card className={`h-100 border-0 hover-shadow`}>
        <Card.Img
          variant="top"
          src={banner}
          style={{ height: '120px', objectFit: 'cover' }}
        />
        <Card.Body className="d-flex flex-column px-2">
          <Card.Title className="mb-2 pb-2 pb-md-0 border-bottom border-bottom-md-0 fs-md-lg">
            <Link to={`/events/${id}`} className="link-btn">
              {title}
            </Link>
          </Card.Title>
          <Card.Text
            className="d-none d-md-block flex-grow-1 mb-3 fs-sm text-m"
            style={{ overflow: 'hidden' }}
          >
            {intro}
          </Card.Text>
          <Card.Text className="d-flex justify-content-between fs-xs text-m">
            <Link to={`/vendor/${companys.id}/index`}>{companys.username}</Link>
            <span>
              <i className="fas fa-map-marker-alt fa-sm mr-1" />
              {location}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
