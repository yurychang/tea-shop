import React from 'react'
import ReactFileReader from 'react-file-reader'

function BackendData() {
  const welcomeText = '您好，歡迎光臨，希望我們提供的商品您會喜歡!'

  //   handleFiles = files => {
  //     console.log(files)
  //   }

  return (
    <>
      <div className="content col-10">
        <h3>資料管理</h3>
        <hr />
        <form className="form-data mb-5">
          <div className="data-area d-flex justify-content-between">
            <div className="form-area col-6">
              <div className="form-group">
                <label>廠商名稱</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="vendorName"
                />
              </div>

              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorEmail"
                />
              </div>

              <div className="form-group">
                <label>地址</label>
                <br />
                <select className="custom-select mb-2 col-5" name="vendorZone">
                  <option selected>選擇縣市</option>
                  <option value="1">台北市</option>
                  <option value="2">新北市</option>
                  <option value="3">新竹市</option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  name="vendorAddress"
                />
              </div>

              <div className="form-group">
                <label>手機號碼</label>
                <input
                  type="text"
                  className="form-control"
                  name="vendorPhone"
                />
              </div>
            </div>

            <div className="img-area col-5">
              <div className="figure">
                <img
                  className="figure-img img-fluid rounded"
                  src="https://via.placeholder.com/300"
                  alt=""
                />
              </div>
              <input type="file" name="vendorImg" />
            </div>
          </div>

          <div className="mt-5 mb-5">
            <label for="validationTextarea">關於商店</label>
            <textarea
              className="form-control"
              value={welcomeText}
              placeholder=""
              required
              name="vendorAbout"
            />
          </div>

          <div className="">
            <label> 商店Banner</label>
            <div className="figure">
              <img
                className="figure-img img-fluid rounded"
                src="https://via.placeholder.com/800x350"
                alt=""
              />
            </div>
            <input type="file" name="vendorBanner" />
          </div>

          <button type="submit" className="btn btn-main col-3">
            更新
          </button>
        </form>
      </div>
    </>
  )
}

export default BackendData
