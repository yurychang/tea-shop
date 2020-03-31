import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Menu() {
  const [memberAccount, setmemberAccount] = useState(false)
  return (
    <div>
      <div className="">
        <ul className="text-nowrap">
          <li
            className="list-item mt-3"
            onClick={() => setmemberAccount(!memberAccount)}
          >
            <NavLink
              className="nav-link pb-2"
              activeClassName="active"
              to="/membercenter/account"
            >
              <i className="far fa-user"> 我的帳戶</i>
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link pb-2 "
              activeClassName="active"
              to="/membercenter/notice"
            >
              <i className="far fa-bell"> 通知總覽</i>
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link pb-2"
              activeClassName="active"
              to="/member"
            >
              <i className="far fa-heart"> 我的收藏</i>
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink className="nav-link pb-2" activeClassName="active" to="">
              <i className="fas fa-list-ol">訂單資訊</i>
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink className="nav-link pb-2" activeClassName="active" to="">
              <i className="fas fa-tags"> 優惠卷</i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
