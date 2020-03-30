import { Link, NavLink, Redirect } from 'react-router-dom'
import React, { useState } from 'react'
import * as sha1 from 'sha1'
import { flash } from 'react-animations'
import Swal from 'sweetalert2'

function VendorLogintest() {
  const [vendorAccount, setVendorAccount] = useState('')
  const [vendorPassword, setVendorPassword] = useState('')

  const [loginmode, setLoginmode] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])


  const loginSuccess = <Redirect to="/dashboard/data" />
  const vendorLoginArea = (
    <div className="container  ls-header">
      <ul className="d-flex justify-content-between mb-2">
        <li className="list-item mt-3">
          <NavLink
            className="nav-link pb-2 ls_login-nav"
            activeClassName="active"
            exact
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
        <h1 className="login">廠商登入</h1>
        <div className="form-group ">
          <input
            type="text"
            className="form-control ls-login-form-control"
            placeholder="請輸入帳號"
            onChange={e => setVendorAccount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control ls-login-form-control"
            placeholder="請輸入密碼"
            required
            onChange={e => setVendorPassword(sha1(e.target.value))}
            required
          />
        </div>

        <div className="d-flex justify-content-around mb-3 mt-5">
          <button
            type="submit"
            className="btn btn-main col-5 ls_login-btn"
            onClick={event => handleSubmit(event)}
          >
            <i className="fas fa-sign-in-alt"></i>登入{' '}
          </button>
          <Link
            className="btn btn-main2 col-5 ls_login-btn"
            to="/signup/vendor"
          >
            <i className="fas fa-clipboard-list"></i> 註冊
          </Link>
        </div>
      </form>
    </div>
  )

  const handleSubmit = event => {
    event.preventDefault()
    const userData = { vendorAccount, vendorPassword }

    sendRegisterDataToServer(userData, () => alert('登入成功'))

    async function sendRegisterDataToServer(userData, callback) {
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request(
        'http://localhost:3333/vendor/try-logindata',
        {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(userData),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )

      const response = await fetch(request)
      console.log('response', response)
      const data = await response.json()

      if (data.success === true) {
        console.log(data.message.text)
        sessionStorage.setItem('vendorOnlyId', JSON.stringify(data.vendorid))
        setLoginmode(true)
      } else {
        Swal.fire('帳號或密碼錯誤')
        console.log(data.success)
      }
    }
  }

  return <>{loginmode ? loginSuccess : vendorLoginArea}</>
}

export default VendorLogintest
