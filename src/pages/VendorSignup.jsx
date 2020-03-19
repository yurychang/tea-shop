import React, { useState } from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import * as sha1 from 'sha1'

export default function Singup() {


  const [vendorAccount, setVendorAccount] = useState('')
  const [vendorPassword1, setVendorPassword1] = useState('')
  const [vendorPassword2, setVendorPassword2] = useState('')
  const [vendorEmail, setVendorEmail] = useState('')
  const [vendorPhone, setVendorPhone] = useState('')

  const [signmode, setSignmode] = useState(false)
  // const [error, setError] = useState(false)
  // const [errorMessages, setErrorMessages] = useState([])

  const nextpage = (<Redirect to='/login/vendor' />)
  const signupform = (<div className="container yz-header p-5">

    <form>
      <h1 className="Singup text-center mb-4">廠商註冊</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control yz-form-control"
          placeholder="請輸入6~8位數英數混合帳號"
          name="vendorAccount"
          onChange={e => setVendorAccount(e.target.value)}
        />
        <input
          type="password"
          className="form-control yz-form-control"
          placeholder="請輸入8位數英數混合密碼"
          name="vendorPassword"
          onChange={e => setVendorPassword1(sha1(e.target.value))}
        />
        <input
          type="password"
          className="form-control yz-form-control"
          placeholder="再次輸入密碼"

        />
        <input
          type="email"
          className="form-control yz-form-control"
          placeholder="請輸入E-mail"
          name="vendorEmail"
          onChange={e => setVendorEmail(e.target.value)}
        />
        <input
          type="text"
          className="form-control yz-form-control"
          placeholder="請輸入電話"
          name="vendorPhone"
          onChange={e => setVendorPhone(e.target.value)}
        />


        <button type="submit" className="btn btn-main2 col-9 mt-4 ml-5" onClick={event => handleSubmit(event)}>
          <i className="fas fa-clipboard-list"></i> 註冊
      </button>
        <div className=""><Link to="/login/vendor">回上頁</Link></div>
      </div>
    </form>

  </div>)
  const handleSubmit = (event) => {
    event.preventDefault()
    // if (error) {
    //   setError(error)
    //   setErrorMessages(errorMessages)
    //   return
    // }

    // let error = false
    // let errorMessages = []
    // if (vendorPassword1 !== vendorPassword2) {
    //   error = true
    //   errorMessages.push('兩次密碼寫的不同')
    // }
    const vendorPassword = vendorPassword1
    const userData = { vendorAccount, vendorPassword, vendorEmail, vendorPhone }

    sendRegisterDataToServer(userData, () => alert('註冊成功，請重新登入'))


    async function sendRegisterDataToServer(userData, callback) {
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request('http://127.0.0.1:3333/vendor/vendorsignup', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const response = await fetch(request)
      console.log('response', response);
      const data = await response.json()
      callback()
      return data;
    }
    setSignmode(true)


  }


  return (
    <>

      {signmode ? nextpage : signupform}
    </>
  )
}
