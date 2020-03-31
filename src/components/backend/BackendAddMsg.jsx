import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function BackendProductMsg() {
  //   const [vendorId, setVendorId] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState('00')
  const vendorId = sessionStorage.getItem('vendorOnlyId')

  //   return ()

  const handleSubmit = event => {
    event.preventDefault()
    const MsgData = { vendorId, title, content, status, vendorId }
    sendMsgDataToServer(MsgData, () => alert('通知新增成功'))
    async function sendMsgDataToServer(userData, callback) { 
      const request = new Request(
        'http://127.0.0.1:3333/vendor/backendAddMsg',
        {
          method: 'POST',
          body: JSON.stringify(MsgData),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      const response = await fetch(request)
      console.log('response', response)
      const data = await response.json()
      callback()
      //   if (data) {
      //     return (
      //       <>
      //         <Redirect to="/dashboard/msg" />
      //       </>
      //     )
      //   }
    }
  }

  return (
    <>
      <div className="content">
        <h3>訊息管理</h3>
        <hr />
        <h5 className="text-center">新增訊息</h5>
        <div className="d-flex justify-content-end">
          <Link className="btn btn-primary mb-2" to="/dashboard/msg">
            回上頁
          </Link>
        </div>

        <form>
          <div className="form-group">
            <label>商品名稱</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="title"
              onChange={e => setTitle(e.target.value)}
              required="required"
            />
          </div>

          <div className="mb-3">
            <label for="validationTextarea">廣告介紹</label>
            <textarea
              className="form-control"
              id="content"
              onChange={e => setContent(e.target.value)}
              placeholder="請輸入內容"
              required="required"
            />
          </div>

          <button
            type="submit"
            className="btn btn-main col-3 mb-3"
            onClick={event => handleSubmit(event)}
          >
            新增訊息
          </button>
        </form>
      </div>
    </>
  )
}
