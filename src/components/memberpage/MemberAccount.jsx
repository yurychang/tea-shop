import React from 'react'
import { Link } from 'react-router-dom'

export default function MemberAccount() {
  return (
    <div>
      <div className="content col-10 yz-content">
        <h3 className="text-center">我的檔案</h3>
        <hr />
        <form className="form-data mb-5">
          <div className="data-area d-flex justify-content-between">
            <div className="form-area col-6">
              <div className="form-group">
                <label>名稱</label>
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
              <div className="figure ls_W300">
                <img className="figure-img img-fluid rounded" alt="" />
              </div>
              <input type="file" name="vendorImg" />
            </div>
          </div>
          <button type="submit" className="btn btn-main col-3">
            更新
          </button>
        </form>
      </div>
    </div>
  )
}
