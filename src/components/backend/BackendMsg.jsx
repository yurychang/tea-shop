import React, { useState, useEffect } from 'react'
import { Link, Router, withRouter } from 'react-router-dom'

function MsgList() {
  const [alldata, setAlldata] = useState([])
  const [status, setStatus] = useState('1')

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

  const updateStatus = event => {
    const id = event.target.getAttribute('data-id')
    event.preventDefault()
    const fd = new FormData()
    fd.append('status', status)
    fd.append('id', id)
    // const statusUpdate = {
    //   status,
    // }
    sendStatusToServer(fd, () => alert('更新成功'))

    async function sendStatusToServer(fd, callback) {
      const request = new Request('http://localhost:3333/vendor/updateMsg', {
        method: 'PUT',
        credentials: 'include',
        body: fd,
      })

      const response = await fetch(request)
      const data = await response.json()
      console.log('response', data)
      callback()
      return data
    }
  }

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
                <button
                  className="btn updateMsg btn-primary"
                  onClick={event => updateStatus(event)}
                  data-id={value.id}
                >
                  推播訊息
                </button>
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
