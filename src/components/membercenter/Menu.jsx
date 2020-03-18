import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <div className="mr-4">
        <ul className="">
          <li className="list-item mt-3">
            <NavLink className="nav-link pb-2" activeClassName="active" to="＃">
              我的帳戶
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link pb-2 "
              activeClassName="active"
              to="＃"
            >
              通知總覽
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link pb-2 "
              activeClassName="active"
              to="＃"
            >
              我的收藏
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink className="nav-link pb-2" activeClassName="active" to="＃">
              購買清單
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link pb-2"
              activeClassName="active"
              to="＃＃"
            >
              我的優惠卷
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
