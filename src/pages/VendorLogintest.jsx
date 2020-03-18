import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'




function VendorLogintest() {

  const [loginMode, setLoginMode] = useState(false)




  return (
    <>
      <div className="container ls-login-header">



        <div className="Loginarea col-10">
        <ul className="d-flex justify-content-between">
          <li className="list-item mt-3"><NavLink className="nav-link pb-2 ls_backend-nav" activeClassName="active" to="/login">會員登入</NavLink></li>
          <li className="nav-item mt-3"><NavLink className="nav-link pb-2 ls_backend-nav" activeClassName="active" to="/login/vendor">廠商登入</NavLink></li>
        </ul>
  <form>
    <h1 className="login">廠商登入</h1>
    <div className="form-group ">
      <input
        type="text"
        className="form-control ls-login-form-control"
        placeholder="請輸入帳號"
      />
    </div>
    <div className="form-group">
      <input type="password" className="form-control ls-login-form-control" placeholder="請輸入密碼" />
    </div>
    <div className="form-group form-check d-flex">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />

      <label className="form-check-label" for="exampleCheck1">
        記住帳號密碼
          </label>
    </div>
    <div className="d-flex justify-content-between mb-3">
      <div className=""><Link to="#">忘記密碼？</Link></div>
      <div className=""><Link to="#">註冊</Link></div>
    </div>

    <button type="submit" className="btn btn-main "><i className="fas fa-sign-in-alt"> 登入</i> </button>


  </form>



        </div>
      </div>
    </>
  )
}

export default VendorLogintest