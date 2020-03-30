import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu({ data }) {
  const renderList = data =>
    data.map(el => {
      return (
        <li key={el.id} className="list-item mb-lg-3">
          <NavLink
            to={`/events/${el.id}`}
            className="list-link link-btn border-mainlight"
            activeClassName="active"
          >
            {el.title}
          </NavLink>
        </li>
      )
    })
  return <ul className="sy_list border-crude pl-2">{renderList(data)}</ul>
}
