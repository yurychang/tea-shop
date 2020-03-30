import { Link, NavLink, Redirect } from 'react-router-dom'
import React, { useState } from 'react'
// import * as sha1 from 'sha1'

function MemberLogintest() {
  const [accountNumber, setAccountNumber] = useState('')
  const [accountPassword, setAccountPassword] = useState('')

  const [loginmode, setLoginmode] = useState(false)
  const loginSuccess = <Redirect to="/membercenter/account" />
  const MemberLoginArea = (
    <div className="container yz-header mb-2">
      <ul className="d-flex justify-content-between">
        <li className="nav-item mt-3">
          <NavLink
            className="nav-link pb-2 ls_login-nav"
            activeClassName="active"
            to="/login"
          >
            會員登入
          </NavLink>
        </li>
        <li className="nav-item mt-3">
          <NavLink
            className="nav-link pb-2 ls_login-nav mr-5"
            activeClassName="active"
            exact
            to="/login/vendor"
          >
            廠商登入
          </NavLink>
        </li>
      </ul>

      <form>
        <h1 className="login">會員登入</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control yz-form-control"
            placeholder="請輸入帳號"
            name="accountNumber"
            onChange={e => setAccountNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control yz-form-control"
            placeholder="請輸入密碼"
            name="accountPassword"
            onChange={e => setAccountPassword(e.target.value)}
          />
        </div>
        <div className="form-group form-check d-flex">
          <input type="checkbox" className="form-check-input" />
          <div>
            <div>
              <label className="form-check-label" for="exampleCheck1">
                記住帳號密碼
              </label>
              <div>
                <div className="yz-froget">
                  <Link to="#">忘記密碼？</Link>
                </div>
                <div className="registered">
                  <Link to="/signup">註冊</Link>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button "
            className="yz_btn-login text-center "
            onClick={event => handleSubmit(event)}
          >
            <i className="fas fa-sign-in-alt"></i>
            登入
          </button>
        </div>
        <Link type="button" className="fb text-center">
          <i className="fab fa-facebook-f"></i>
          Facebook
        </Link>
        <Link type="button" className="gmail text-center">
          <i className="far fa-envelope"> </i>
          Gmail
        </Link>
      </form>
    </div>
  )

  const handleSubmit = event => {
    event.preventDefault()
    const userData = { accountNumber, accountPassword }

    sendRegisterDataToServer(userData, () => alert('登入成功'))

    async function sendRegisterDataToServer(userData, callback) {
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request('http://localhost:3333/member/login', {
        method: 'POST',
        body: JSON.stringify(userData),
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const response = await fetch(request)
      console.log('response', response)
      const data = await response.json()

      if (data.success === true) {
        console.log(data.message.text)
        localStorage.setItem('m_onlyid', JSON.stringify(data.m_id))
        console.log('loginmode', loginmode)
        setLoginmode(true)
      } else {
        console.log(data.message.text)
      }
    }
  }

  return <>{loginmode ? loginSuccess : MemberLoginArea}</>
}

export default MemberLogintest
