import React from 'react'
import { Link } from 'react-router-dom'

export default function MemberBar() {
  return (
    <div>
      <div classNameName="d-flex align-items-stretch">
        <div id="sidebar" className="sidebar py-3">
          <div className="text-gray-400 text-uppercase px-3 px-lg-4 py-4 font-weight-bold small headings-font-family">
            MAIN
          </div>
          <ul className="sidebar-menu list-unstyled">
            <li className="sidebar-list-item">
              <Link>
                <span>我的帳戶</span>
              </Link>
              <div id="pages" className="collapse">
                <ul className="sidebar-menu list-unstyled border-left border-primary border-thick">
                  <li className="sidebar-list-item">
                    <Link to="#" className="sidebar-link text-muted pl-lg-5">
                      個人檔案
                    </Link>
                  </li>
                  <li className="sidebar-list-item">
                    <Link to="#" className="sidebar-link text-muted pl-lg-5">
                      修改密碼
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="sidebar-list-item">
              <Link to="#" className="sidebar-link text-muted pl-lg-5">
                <span>我的收藏</span>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="#" className="sidebar-link text-muted active">
                <span>購物清單</span>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="#" className="sidebar-link text-muted">
                <span>我的優惠券</span>
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="#" className="sidebar-link text-muted">
                <span>Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
