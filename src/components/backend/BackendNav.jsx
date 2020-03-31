import React from 'react'
import { NavLink } from 'react-router-dom'

function BackendNav() {
  return (
    <>
      <div className="ls_backend-nav mr-4">
        <ul className="">
          <li className="list-item mt-3">
            <NavLink
              className="nav-link pb-2 ls_backend-nav"
              activeClassName="active"
              to="/dashboard/order"
            >
              訂單管理
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link pb-2 ls_backend-nav"
              activeClassName="active"
              to="/dashboard/product"
            >
              商品管理
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link pb-2 ls_backend-nav"
              activeClassName="active"
              to="/dashboard/msg"
            >
              訊息管理
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link pb-2 ls_backend-nav"
              activeClassName="active"
              to="/dashboard/events"
            >
              活動管理
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link pb-2 ls_backend-nav"
              activeClassName="active"
              to="/dashboard/location"
            >
              據點管理
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link pb-2 ls_backend-nav"
              activeClassName="active"
              to="/dashboard/data"
            >
              資料管理
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default BackendNav
