import React, { useState } from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
// import * as sha1 from 'sha1'

export default function Singup() {
  const [accountNumber, setAccountNumber] = useState('')
  const [accountEmail, setAccountEmail] = useState('')
  const [accountPhone, setAccountPhone] = useState('')
  const [accountPassword1, setAccountPassword1] = useState('')
  const [accountPassword2, setAccountPassword2] = useState('')

  const [signmode, setSignmode] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  const nextpage = <Redirect to="/signup" />
  const signupform = (
    <div className="container yz-header">
      <div className="Singuparea">
        <form>
          <h1 className="Singup text-center">Singup</h1>
          <div className="form-group">
            <input
              type="text"
              className="form-control yz-form-control"
              id="exampleInputName"
              placeholder="帳號"
              name="accountNumber"
              onChange={e => setAccountNumber(e.target.value)}
            />
            <input
              type="email"
              className="form-control yz-form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              name="accountEmail"
              onChange={e => setAccountEmail(e.target.value)}
            />
            <input
              type="phone"
              className="form-control yz-form-control"
              id="exampleInputPhone"
              placeholder="Phone"
              name="accountPhone"
              onChange={e => setAccountPhone(e.target.value)}
            />
            <input
              type="password"
              className="form-control yz-form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="accountPassword"
              onChange={e => setAccountPassword1(e.target.value)}
            />
            <input
              type="password"
              className="form-control yz-form-control"
              id="exampleInputPassword2"
              placeholder="Confirm Password"
              name="accountPassword2"
              onChange={e => setAccountPassword2(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn-singup"
            onClick={event => handleSubmit(event)}
          >
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
  const handleSubmit = event => {
    event.preventDefault()

    let error = false
    let errorMessages = []
    if (accountPassword1 !== accountPassword2) {
      error = true
      errorMessages.push('兩次密碼輸入不同')
    }

    if (!accountNumber) {
      error = true
      errorMessages.push('帳號沒填')
    }

    if (accountNumber.length < 8) {
      error = true
      errorMessages.push('帳號至少要8個字')
    }

    if (error) {
      setError(error)
      setErrorMessages(errorMessages)
      return
    }
    const accountPassword = accountPassword1
    const userData = {
      accountNumber,
      accountEmail,
      accountPhone,
      accountPassword,
    }
    console.log(userData)

    sendRegisterDataToServer(userData, () => alert('註冊成功，請重新登入'))

    async function sendRegisterDataToServer(userData, callback) {
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request('http://127.0.0.1:3333/member/signup', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const response = await fetch(request)
      console.log('response', response)
      const data = await response.json()
      console.log(data)
      callback()
      return data
    }
    setSignmode(true)
  }

  return (
    <>
      {error ? (
        <>
          <div className="alert alert-danger" role="alert">
            {errorMessages.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </>
      ) : (
        ''
      )}
      {signmode ? nextpage : signupform}
    </>
  )
}
