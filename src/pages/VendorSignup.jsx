import React, { useState } from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import * as sha1 from 'sha1'
import Swal from 'sweetalert2'

export default function VendorSingup() {
  const [vendorAccount, setVendorAccount] = useState('')
  const [vendorPassword1, setVendorPassword1] = useState('')
  const [vendorPassword2, setVendorPassword2] = useState('')
  const [vendorEmail, setVendorEmail] = useState('')
  const [vendorPhone, setVendorPhone] = useState('')

  const [signmode, setSignmode] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  const nextpage = <Redirect to="/login/vendor" />
  const signupform = (
    <div className="container yz-header p-5">
      <form>
        <h1 className="Singup text-center mb-4">廠商註冊</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control yz-form-control"
            placeholder="請輸入6位數以上英數混合帳號"
            name="vendorAccount"
            onChange={e => setVendorAccount(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control yz-form-control"
            placeholder="請輸入自訂密碼"
            name="vendorPassword1"
            onChange={e => setVendorPassword1(sha1(e.target.value))}
            required
          />
          <input
            type="password"
            className="form-control yz-form-control"
            placeholder="再次輸入密碼"
            name="vendorPassword2"
            onChange={e => setVendorPassword2(sha1(e.target.value))}
            required="required"
          />
          <input
            type="email"
            className="form-control yz-form-control"
            placeholder="請輸入E-mail"
            name="vendorEmail"
            onChange={e => setVendorEmail(e.target.value)}
            required="required"
          />
          <input
            type="text"
            className="form-control yz-form-control"
            placeholder="請輸入電話"
            name="vendorPhone"
            onChange={e => setVendorPhone(e.target.value)}
            required="required"
          />

          <button
            type="submit"
            className="btn btn-main2 col-9 mt-4 ml-5"
            onClick={event => handleSubmit(event)}
          >
            <i className="fas fa-clipboard-list"></i> 註冊
          </button>
          <div className="">
            <Link to="/login/vendor">回上頁</Link>
          </div>
        </div>
      </form>
    </div>
  )
  const handleSubmit = event => {
    event.preventDefault()

    let error = false
    let errorMessages = []
    if (vendorPassword1 !== vendorPassword2) {
      error = true
      errorMessages.push('兩次密碼輸入不同')
    }

    if (!vendorAccount) {
      error = true
      errorMessages.push('帳號沒填')
    }

    const regex = new RegExp(/^([a-zA-Z]+\d+|\d+[a-zA-Z]+)*$/)
    console.log('regex.test(vendorAccount)', regex.test(vendorAccount))
    if (!regex.test(vendorAccount)) {
      error = true
      errorMessages.push('帳號至少要英文+數字')
    }

    if (vendorAccount.length < 6) {
      error = true
      errorMessages.push('帳號至少要6個字元')
    }


    if (error) {
      setError(error)
      setErrorMessages(errorMessages)
      return
    }
    const vendorPassword = vendorPassword1
    const userData = { vendorAccount, vendorPassword, vendorEmail, vendorPhone }

    sendRegisterDataToServer(userData, () => Swal.fire('註冊成功，請重新登入'))

    async function sendRegisterDataToServer(userData, callback) {
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request('http://127.0.0.1:3333/vendor/vendorsignup', {
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
      callback()
      return data
    }
    setSignmode(true)
  }

  return (
    <>
      {error ? (
        <>
          <div className="alert alert-danger ls_alert-signup" role="alert">
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
