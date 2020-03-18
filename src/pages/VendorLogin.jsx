import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'





function VendorLogintest() {

  const [loginMode, setLoginMode] = useState(false)




  return (
    <>


      <div className="container  yz-header">
        <ul className="d-flex justify-content-between mb-2">
          <li className="list-item mt-3"><NavLink className="nav-link pb-2 ls_login-nav" activeClassName="active" exact to="/login">會員登入</NavLink></li>
          <li className="nav-item mt-3"><NavLink className="nav-link pb-2 ls_login-nav mr-5" activeClassName="active" exact to="/login/vendor">廠商登入</NavLink></li>
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

            <label className="form-check-label">
              記住帳號密碼
          </label>
          </div>

          <div className=""><Link to="#">忘記密碼？</Link></div>

          <div className="d-flex justify-content-around mb-3 mt-5">
            <button type="submit" className="btn btn-main col-5 ls_login-btn"><i className="fas fa-sign-in-alt"> </i>登入 </button>
            <button type="submit" className="btn btn-main2  col-5 ls_login-btn"><i class="fas fa-clipboard-list"></i> 註冊</button>
          </div>


        </form>
      </div>

    </>
  )
}

export default VendorLogintest