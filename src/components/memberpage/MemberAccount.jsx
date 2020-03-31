import React, { useState, useEffect } from 'react'

function MemberAccount() {
  const [imgUrl, setImgUrl] = useState('')

  const [memberName, setmemberName] = useState('')
  const [memberEmail, setmemberEmail] = useState('')
  const [memberPhone, setmemberPhone] = useState('')
  const [memberAddress, setmemberAddress] = useState('')
  const [memberImg, setmemberImg] = useState('')
  const localId = localStorage.getItem('m_onlyid')
  useEffect(() => {
    getDataFromServer()
  }, [])
  //取得會員原有資料
  async function getDataFromServer() {
    const request = new Request(
      'http://localhost:3333/member/getmemberdata/' + localId,
      {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    setmemberName(data[0].m_username)
    setmemberEmail(data[0].m_email)
    setmemberPhone(data[0].m_phone)
    setmemberAddress(data[0].m_address)
    setImgUrl(data[0].m_img)
  }

  //取得廠商原有資料end

  //預覽圖片(大頭照)
  const handleUserImg = e => {
    const content = e.target.result
    // console.log('file content', content)
    // You can set content in state and show it in render.
    setImgUrl(content)
  }

  const handleChangeUserImg = file => {
    console.log(file)
    const fileData = new FileReader()
    setmemberImg(file)
    fileData.onloadend = handleUserImg
    fileData.readAsDataURL(file)
  }

  //送出資料(不含關於跟Banner)
  const handleSubmit = event => {
    event.preventDefault()

    const memberUpdate = {
      memberName,
      memberEmail,
      memberPhone,
      memberAddress,
      memberImg,
      localId,
    }
    let formData = new FormData()
    for (let key in memberUpdate) {
      formData.append(`${key}`, memberUpdate[key])
    }
    // memberUpdate.map((value, index) => {
    //   formData.append(`${index}`, value)
    // })
    // formData.append('memberImg', memberImg)
    sendRegisterDataToServer(memberUpdate, () => alert('更新成功'))

    async function sendRegisterDataToServer(memberUpdate, callback) {
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request('http://localhost:3333/member/updatedata', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })

      const response = await fetch(request)
      const data = await response.json()
      console.log('response', data)
      callback()
      return data
    }
  }

  return (
    <>
      <div className="content col-10 yz-content">
        <h3 className="text-center">我的檔案</h3>
        <hr />
        <form className="form-data mb-5">
          <div className="data-area d-flex justify-content-between">
            <div className="form-area col-6">
              <div className="form-group">
                <label>帳號</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="memberName"
                  value={memberName}
                  onChange={e => setmemberName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="text"
                  className="form-control"
                  name="memberEmail"
                  value={memberEmail}
                  onChange={e => setmemberEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>地址</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="memberAddress"
                  value={memberAddress}
                  onChange={e => setmemberAddress(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>手機號碼</label>
                <input
                  type="text"
                  className="form-control"
                  name="memberPhone"
                  value={memberPhone}
                  onChange={e => setmemberPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="img-area col-5">
              <div className="figure ls_W300">
                <img
                  className="figure-img img-fluid rounded"
                  src={imgUrl}
                  alt=""
                />
              </div>
              <input
                type="file"
                name="memberImg"
                onChange={e => {
                  handleChangeUserImg(e.target.files[0])
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-main col-2 m-3"
            onClick={event => handleSubmit(event)}
          >
            更新
          </button>
          <button
            type="submit"
            className="btn btn-main col-2 m-3"
          >
            登出
          </button>
        </form>
      </div>
    </>
  )
}

export default MemberAccount
