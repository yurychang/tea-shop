import React from 'react'
import { Container } from 'react-bootstrap'

export default function Singup() {
  return (
    <div className="container yz-header">
      <div className="Singuparea">
        <form>
          <h1 className="Singup text-center">Singup</h1>
          <div className="form-group">
            <input
              type="name"
              className="form-control yz-form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
            <input
              type="email"
              className="form-control yz-form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
            <input
              type="phone"
              className="form-control yz-form-control"
              id="exampleInputPhone"
              aria-describedby="emailHelp"
              placeholder="Phone"
            />
            <input
              type="password"
              className="form-control yz-form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <input
              type="password"
              className="form-control yz-form-control"
              id="exampleInputPassword2"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn-singup">
            <i className="fas fa-sign-in-alt"> 註冊</i>
          </button>
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
