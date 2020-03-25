import React from 'react'
import { Link } from 'react-router-dom'
import orderupdate from '../../images/orderupdate.svg'
import newmembernotice from '../../images/newmembernotice.svg'

export default function MemberNotice() {
  return (
    <div className="noticecontainer">
      <h3 className="text-center">通知總覽</h3>
      <hr />
      <div className="content col-10"></div>
      <div className="d-flex justify-content-around mb-4">
        <div className="card">
          <h4 className="card-title text-center yz-card-title">訂單更新</h4>
          <div className="card-body d-flex justify-content-around">
            <div className="_yz_noticimg">
              <img src={orderupdate} />
            </div>
            <div className="cardnotic-name">
              <h5 className="text-nowrap">烏龍茶</h5>
              <p>zzzzzzzzzzzzzzzzzzzzzz</p>
            </div>
            <div className="cardnotic-price">
              <h5 className="text-center text-nowrap">價格</h5>
              <p className="text-center">100</p>
            </div>
            <div>
              <div className="cardnotic-sta">
                <h5 className="text-nowrap">已完成</h5>
                <i class="far fa-check-circle fon text-center"></i>
              </div>
            </div>
          </div>
          <div className="card-body d-flex justify-content-between">
            <div className="_yz_noticimg">
              <img src={orderupdate} />
            </div>
            <div className="cardnotic-name">
              <h5 className="text-nowrap">烏龍茶</h5>
              <p>zzzzzzzzzzzzzzzzzzzzzz</p>
            </div>
            <div className="cardnotic-price">
              <h5 className="text-nowrap">價格</h5>
              <p className="text-center">100</p>
            </div>
            <div>
              <div className="cardnotic-sta">
                <h5 className="text-nowrap">已取消</h5>
                <i class="far fa-times-circle text-center"></i>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-3"></div>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center text-nowrap">促銷活動</h3>
            <div className="card-body d-flex justify-content-around">
              <div className="_yz_noticimg">
                <img src={newmembernotice} />
              </div>
              <div className="cardnotic-name">
                <p>新會員都靠過來🔥領取$0禮物！</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
