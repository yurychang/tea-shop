import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import orderupdate from '../../images/orderupdate.svg'

export default function MemberInfor() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="noticecontainer yz_table">
        <h4>訂單資訊</h4>
        <hr />
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">日期：</th>
              <th scope="col">商品名稱</th>
              <th scope="col">價格</th>
              <th scope="col">數量</th>
              <th scope="col">狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="yz_img" scope="row">
                <img src={orderupdate} />
              </th>
              <td>蜜韻紅茶包</td>
              <td>＄＄＄</td>
              <td>100個</td>
              <button
                type="button"
                style={{ padding: 5, marginLeft: 10 }}
                className="btn btn-outline-danger"
              >
                刪除
              </button>
            </tr>
            <tr>
              <th className="yz_img" scope="row">
                <img src={orderupdate} />
              </th>
              <td>蜜韻紅茶</td>
              <td>＄＄＄</td>
              <td>100個</td>
              <button
                type="button"
                style={{ padding: 5, marginLeft: 10 }}
                className="btn btn-outline-danger"
              >
                刪除
              </button>
            </tr>
            <tr>
              <th className="yz_img" scope="row">
                <img src={orderupdate} />
              </th>
              <td>苗栗貓裏紅茶</td>
              <td>＄＄＄</td>
              <td>100個</td>
              <button
                type="button"
                style={{ padding: 5, marginLeft: 10 }}
                class="btn btn-outline-danger"
              >
                刪除
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
