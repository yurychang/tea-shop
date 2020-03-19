import React from 'react'
import { Link } from 'react-router-dom'
import Figure from 'react-bootstrap/Figure'
import { NavLink } from 'react-router-dom'





function BackendOrder() {

  return (
    <>
      <div className="content col-10">
        <h3>訊息管理</h3>
        <hr />
        <div className="order-area">
          <ul className="nav mb-4">
            <li className="nav-item ls_backend-order">
              <NavLink className="nav-link active" to="#" activeClassName="active" >全部訂單</NavLink>
            </li>
            <li className="nav-item ls_backend-order">
              <NavLink className="nav-link" to="#" activeClassName="active">待出貨</NavLink>
            </li>
            <li className="nav-item ls_backend-order">
              <NavLink className="nav-link" to="#" activeClassName="active">運送中</NavLink>
            </li>
            <li className="nav-item ls_backend-order">
              <NavLink className="nav-link" to="#" activeClassName="active">已送達</NavLink>
            </li>
          </ul>

          <div className="card-header d-flex justify-content-between mb-4">
            <div className="product-img">商品</div>
            <div className="order-price">價格</div>
            <div className="order-status">運送狀態</div>
          </div>

          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between">
              <div className="ls_order-account">消費者頭像+帳號
              <Link type="button" className="btn btn-main btn-sm ml-3" to="/dashboard/order/detail/1234">訂單詳情</Link>
              </div>
              <div className="order-number">訂單編號:20200308001</div>
            </div>
            <div className="card-body d-flex justify-content-between align-items-center ls_back-order-body">
              <Figure className="ls_back-order-figure">
                <img className="" src="https://via.placeholder.com/200x150" alt="" />
              </Figure>
              <div className="order-price mr-7">
                NTD 200
            </div>
              <div className="order-status">待出貨</div>

            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between">
              <div className="account">消費者頭像+帳號
            <button type="button" className="btn btn-main btn-sm ml-2">訂單詳情</button></div>
              <div className="order-number">訂單編號:20200308001</div>
            </div>
            <div className="card-body d-flex justify-content-between align-items-center ls_back-order-body">
              <Figure className="ls_back-order-figure">
                <img className="" src="https://via.placeholder.com/200x150" alt="" />
              </Figure>
              <div className="order-price">
                NTD 200
            </div>
              <div className="order-status">運送中</div>

            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between">
              <div className="account">消費者頭像+帳號
            <button type="button" className="btn btn-main btn-sm ml-2">訂單詳情</button></div>
              <div className="order-number">訂單編號:20200308001</div>
            </div>
            <div className="card-body d-flex justify-content-between align-items-center ls_back-order-body">
              <Figure className="ls_back-order-figure">
                <img className="" src="https://via.placeholder.com/200x150" alt="" />
              </Figure>
              <div className="order-price ">
                NTD 200
            </div>
              <div className="order-status">已送達</div>

            </div>
          </div>




        </div>



      </div>

    </>
  )
}

export default BackendOrder