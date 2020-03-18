import React from 'react'
import styled from 'styled-components'

const BorderBottom = styled.div`
  border-bottom: 1.5px solid;
`

const MinHeight = styled.img`
  min-height: 160px;
`

export default function EventInfo({ title, location, price, content, banner }) {
  return (
    <section>
      <MinHeight
        className="w-100 object-cover"
        src={banner}
        alt="banner"
      />
      <BorderBottom className="d-flex mt-3 mb-3 border-mainlight">
        <h1 className="h4 my-0">{title}</h1>
        <a
          href="#registForm"
          className="align-self-end ml-auto bg-mainlight text-white fs-xs m-0 px-2 py-1"
        >
          預約報名
        </a>
      </BorderBottom>
      <div className="mb-4">
        <span className="mr-5">${price}/人</span>
        <span>
          <i className="fas fa-map-marker-alt fa-sm mr-1" />
          {location}
        </span>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  )
}

// export default connect(({ events }) => {
//   return { event: events.data[0] }
// }, null)(EventInfo)
