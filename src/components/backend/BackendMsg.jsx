import React, { useState, useEffect } from 'react'
import { Link, Router, withRouter } from 'react-router-dom'

function MsgList() {
  const [alldata, setAlldata] = useState([])

  async function getMsgFromServer() {
    const request = new Request('http://localhost:3333/vendor/getMsg', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setAlldata(data)
    console.log(alldata)
  }

  useEffect(() => {
    getMsgFromServer()
  }, [])
  

  const singleMsg = (
    <>
      {alldata.map((value, index) => {
        return (
          <div className="card singleMsg mb-4">
            <div className="card-header d-flex justify-content-between">
              <div className="account">訊息標題：{value.title}</div>
            </div>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="Msg">{value.content}</div>
              <div>
                <button className="btn updateMsg btn-primary">推播訊息</button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )

  return (
    <>
      <div className="content">
        <h3>訊息管理</h3>
        <hr />
        <div className="d-flex justify-content-end">
          <Link className="btn btn-primary mb-2" to="/dashboard/msg/add">
            新增推播訊息
          </Link>
        </div>
        <div className="msgArea">{singleMsg}</div>
      </div>
    </>
  )
}

export default withRouter(MsgList)
