import React from 'react'
import { Container } from 'react-bootstrap'

export default function Login() {
  return (
    <div className="container yz-header">
      <div className="Loginarea">
        <form>
          <h1 className="login">Login</h1>
          <div className="form-group">
            <input
              type="email"
              className="form-control yz-form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email address"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control yz-form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check d-flex">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <div>
              <div>
                <label className="form-check-label" for="exampleCheck1">
                  記住帳號密碼
                </label>
                <div>
                  <div className="yz-froget">
                    <a href="#">忘記密碼？</a>
                  </div>
                  <div className="registered">
                    <a href="#">註冊</a>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn-login">
              <i className="fas fa-sign-in-alt"> 登入</i>
            </button>
          </div>
          <button type="submit" className="fb">
            <i className="fab fa-facebook-f"> Facebook</i>
          </button>
          <button type="submit" className="gmail">
            <i className="far fa-envelope"> Gmail</i>
          </button>
        </form>
      </div>
    </div>
  )
}
