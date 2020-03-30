import React, { useState, useEffect } from 'react'
import {Redirect } from 'react-router-dom'

function BackendData() {
  const [imgUrl, setImgUrl] = useState('')
  const [imgUrl2, setImgUrl2] = useState('')

  const [vendorName, setVendorName] = useState('')
  const [vendorEmail, setVendorEmail] = useState('')
  const [vendorPhone, setVendorPhone] = useState('')
  const [vendorZone, setVendorZone] = useState('')
  const [vendorAddress, setVendorAddress] = useState('')
  const [vendorImg, setVendorImg] = useState('')
  const [vendorAbout, setVendorAbout] = useState('')
  const [vendorBanner, setVendorBanner] = useState('')


  //取得廠商原有資料
  async function getDataFromServer() {
    const request = new Request(
      'http://localhost:3333/vendor/getvendordata',
      {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    // if (data.status ===400) {
    //   return <><Redirect to="/index" /></>
    // }
    setVendorName(data[0].vendorName)
    setVendorEmail(data[0].vendorEmail)
    setVendorPhone(data[0].vendorPhone)
    setVendorZone(data[0].vendorZone)
    setVendorAddress(data[0].vendorAddress)
    setImgUrl(data[0].vendorImg)
    setVendorAbout(data[0].vendorAbout)
    setImgUrl2(data[0].vendorBanner)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

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
    setVendorImg(file)
    fileData.onloadend = handleUserImg
    fileData.readAsDataURL(file)
  }

  //預覽圖片(Banner)
  const handleBannerImg = e => {
    const content = e.target.result
    // console.log('file content', content)
    // You can set content in state and show it in render.
    setImgUrl2(content)
  }

  const handleChangeBannerImg = file => {
    const fileData = new FileReader()
    setVendorBanner(file)
    fileData.onloadend = handleBannerImg
    fileData.readAsDataURL(file)
  }

  //送出資料(不含關於跟Banner)
  const handleSubmit = event => {
    event.preventDefault()

    const vendorUpdate = {
      vendorName,
      vendorEmail,
      vendorPhone,
      vendorZone,
      vendorAddress,
      vendorImg,
    }
    let formData = new FormData()
    for (let key in vendorUpdate) {
      formData.append(`${key}`, vendorUpdate[key])
    }
    // vendorUpdate.map((value, index) => {
    //     formData.append(`${index}`, value);
    // })
    // formData.append('vendorImg', vendorImg);
    sendRegisterDataToServer(vendorUpdate, () => alert('更新成功'))

    async function sendRegisterDataToServer(vendorUpdate, callback) {
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request('http://localhost:3333/vendor/updatedata', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })

      const response = await fetch(request)
      console.log('response', response)
      const data = await response.json()
      callback()
      return data
    }
  }
  //送出資料(只有關於跟Banner)
  const handleSubmit2 = event => {
    event.preventDefault()

    const vendorUpdate = { vendorAbout, vendorBanner }
    console.log(vendorUpdate)
    let formData = new FormData()
    for (let key in vendorUpdate) {
      formData.append(`${key}`, vendorUpdate[key])
    }

    sendRegisterDataToServer(vendorUpdate, () => alert('更新成功'))

    async function sendRegisterDataToServer(vendorUpdate, callback) {
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request('http://localhost:3333/vendor/updateabout', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })

      const response = await fetch(request)
      console.log('response', response)
      const data = await response.json()
      callback()
      return data
    }
  }

  return (
    <>
      <div className="content col-10">
        <h3>資料管理</h3>
        <hr />
        <form
          className="form-data mb-5"
          encType="multipart/form-data"
          name="data-main"
        >
          <div className="data-area d-flex justify-content-between">
            <div className="form-area col-6">
              <div className="form-group">
                <label>廠商名稱</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="vendorName"
                  value={vendorName}
                  onChange={e => setVendorName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="vendorEmail"
                  value={vendorEmail}
                  onChange={e => setVendorEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>手機號碼</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorPhone"
                  value={vendorPhone}
                  onChange={e => setVendorPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>地址</label>
                <br />
                <select
                  className="custom-select mb-2 col-5"
                  name="vendorZone"
                  value={vendorZone}
                  onChange={e => setVendorZone(e.target.value)}
                >
                  <option selected>選擇縣市</option>
                  <option value="11">台北市</option>
                  <option value="12">新北市</option>
                  <option value="13">桃園市</option>
                  <option value="14">基隆市</option>
                  <option value="15">新竹縣</option>
                  <option value="16">宜蘭縣</option>
                  <option value="21">台中市</option>
                  <option value="22">苗栗縣</option>
                  <option value="23">彰化縣</option>
                  <option value="24">南投縣</option>
                  <option value="25">雲林縣</option>
                  <option value="31">嘉義縣</option>
                  <option value="32">台南市</option>
                  <option value="33">高雄市</option>
                  <option value="34">屏東縣</option>
                  <option value="35">澎湖縣</option>
                  <option value="41">花蓮縣</option>
                  <option value="42">台東縣</option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  name="vendorAddress"
                  value={vendorAddress}
                  onChange={e => setVendorAddress(e.target.value)}
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
                name="vendorImg"
                onChange={e => handleChangeUserImg(e.target.files[0])}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-main col-3"
            onClick={event => handleSubmit(event)}
          >
            更新資料
          </button>
        </form>

        <h3 className="mt-7">商店頁面管理</h3>
        <hr />

        <form action="" name="data-sub">
          <div className="mb-5">
            <label>關於商店</label>
            <textarea
              className="form-control"
              value={vendorAbout}
              placeholder=""
              name="vendorAbout"
              onChange={e => setVendorAbout(e.target.value)}
            />
          </div>

          <div className="">
            <label> 商店Banner</label>
            <div className="figure ls_W800">
              <img
                className="figure-img img-fluid rounded"
                src={imgUrl2}
                alt=""
              />
            </div>
            <input
              type="file"
              name="vendorBanner"
              onChange={e => handleChangeBannerImg(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="btn btn-main col-3"
            onClick={event => handleSubmit2(event)}
          >
            更新介紹
          </button>
        </form>
      </div>
    </>
  )
}
export default BackendData
