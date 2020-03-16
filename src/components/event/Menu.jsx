import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="sy_list border-crude pl-2">
      <li className="list-item mb-lg-3">
        <NavLink
          to="/events/vendor/0"
          className="list-link link-btn border-mainlight"
          activeClassName="active"
        >
          半日茶師小旅行
        </NavLink>
      </li>
      <li className="list-item mb-lg-3">
        <NavLink
          to="/events/vendor/1"
          className="list-link link-btn border-mainlight"
          activeClassName="active"
        >
          半日茶師小旅行
        </NavLink>
      </li>
      <li className="list-item mb-lg-3">
        <NavLink
          to="/events/vendor/2"
          className="list-link link-btn border-mainlight"
          activeClassName="active"
        >
          半日茶師小旅行
        </NavLink>
      </li>
    </div>
  )
}
