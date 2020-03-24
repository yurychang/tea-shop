import React from 'react'
import { Link } from 'react-router-dom'






function BackendOrder(props) {

  return (
    <>
      <div className="content">
        <h3>訂單管理</h3>
        <hr />
        <div class="order-area">
          <div class="d-flex justify-content-end">
            <Link className="btn btn-primary mb-2" to="/dashboard/order/">回上頁</Link>
          </div>

          <form class="col-6 mb-3" action="">
            <input class="form-control mb-2" type="text" />
            <button type="button" class="btn btn-primary">回報追蹤碼</button>
          </form>


          <div class="card-header d-flex justify-content-between mb-4">
            <div class="order-status">已送達</div>
          </div>

          <div class="">
            <ul class="col-6 mb-4">
              <li class="list-group">訂單編號：</li>
              <li class="list-group">20200308001</li>
            </ul>
          </div>
          <hr />

          <div class="">
            <ul class="col-6 mb-4">
              <li class="">購買者資訊：</li>
              <li class="">姓名：王小明</li>
              <li class="">電話：0900111222</li>
              <li class="">地址：台北市大安區復興南路1號</li>
            </ul>
          </div>


          <div class="payInfo">
            <h5 class="mb-4">付款資訊</h5>
          </div>

          <div class="card mb-4">
            <div class="card-header d-flex justify-content-between ls_bk-color">
              <div class="account">編號</div>
              <div class="order-product-single">商品</div>
              <div class="order-price">單價</div>
              <div class="order-count">數量</div>
              <div class="order-total">小計</div>
            </div>
            <div class="card-body d-flex justify-content-between">
              <div class="account">1、</div>
              <div class="order-product-single">蜜香綠茶</div>
              <div class="order-price">NTD 150</div>
              <div class="order-count">3</div>
              <div class="order-total">450</div>
            </div>


            <div class="card-body d-flex justify-content-between">
              <div class="account">2、</div>
              <div class="order-product-single">台茶18號</div>
              <div class="order-price">NTD 150</div>
              <div class="order-count">3</div>
              <div class="order-total">450</div>

            </div>
            <hr />

            <div class="card-body d-flex justify-content-end">
              <div class="w180px">訂單總額</div>
              <div class="">900</div>
            </div>

            <div class="card-body d-flex justify-content-end">
              <div class="w180px">運費</div>
              <div class="">60</div>
            </div>

            <div class="card-header d-flex justify-content-end ls_bk-color">
              <div class="w180px">買家應付總額</div>
              <div class="font-weight-bold">960</div>
            </div>



          </div>


        </div>

      </div>

    </>
  )
}

export default BackendOrder