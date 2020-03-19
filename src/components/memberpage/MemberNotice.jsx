import React from 'react'
import { Link } from 'react-router-dom'

export default function MemberNotice() {
  return (
    <div>
      <div className="content col-10"></div>
      <h3 className="text-center">通知總覽</h3>
      <hr />
      <ul className="nav mb-4">
        <li className="nav-item">
          <Link className="nav-link data-ma" to="#">
            訂單更新
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link data-ma" to="#">
            處銷活動
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link data-ma" to="#">
            動態通知
          </Link>
        </li>
      </ul>
    </div>
  )
}
