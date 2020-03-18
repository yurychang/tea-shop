import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'


export default function Login() {
  return (
    <div className="container yz-header mb-2">
      <ul className="d-flex justify-content-between">
        <li className="nav-item mt-3"><NavLink className="nav-link pb-2 ls_login-nav" activeClassName="active" to="/login">會員登入</NavLink></li>
        <li className="nav-item mt-3"><NavLink className="nav-link pb-2 ls_login-nav mr-5" activeClassName="active" exact to="/login/vendor">廠商登入</NavLink></li>
      </ul>

      <form>
        <h1 className="login">會員登入</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control yz-form-control"
            placeholder="請輸入帳號"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control yz-form-control"
            placeholder="請輸入密碼"
          />
        </div>
        <div className="form-group form-check d-flex">
          <input
            type="checkbox"
            className="form-check-input"
          />
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
                  <Link to="#">註冊</Link>
                </div>
              </div>
            </div>
          </div>
          <Link type="button" className="yz_btn-login text-center">
            <i className="fas fa-sign-in-alt"> </i>
            登入</Link>
        </div>
        <Link type="button" className="fb text-center">
          <i className="fab fa-facebook-f"></i>
          Facebook</Link>
        <Link type="button" className="gmail text-center">
          <i className="far fa-envelope"> </i>
          Gmail</Link>
      </form>
    </div>
  )
}
