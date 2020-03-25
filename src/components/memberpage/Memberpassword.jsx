import React from 'react'
import { Link } from 'react-router-dom'

export default function MemberPassword() {
  return (
    <div>
      <form className="yz-password">
        <h3 className="login">修改密碼</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control yz-passwordform-control"
            placeholder="請輸入新密碼"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control yz-passwordform-control"
            placeholder="請在輸入一次"
          />
        </div>
        <Link type="button" className="yz-passwordbtn text-center">
          確認
        </Link>
      </form>
    </div>
  )
}
