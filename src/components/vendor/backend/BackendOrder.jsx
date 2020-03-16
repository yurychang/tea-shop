import React from 'react'
import { Link } from 'react-router-dom'
import Figure from 'react-bootstrap/Figure'





function BackendOrder(props) {

    return (
        <>
    <div className="content col-10">
    <h3>{props.pagename}</h3>
      <hr />
        <div className="order-area">
            <ul className="nav mb-4">
            <li className="nav-item">
                <Link className="nav-link active" href="#">全部訂單</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#">待出貨</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#">運送中</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#">已送達</Link>
            </li>
            </ul>

        <div className="card-header d-flex justify-content-between mb-4">
          <div className="product-img">商品</div>
          <div className="order-price">價格</div>
          <div className="order-status">運送狀態</div>
        </div>

        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between">
            <div className="account">消費者頭像+帳號
            <button type="button" className="btn btn-primary btn-sm ml-2">訂單詳情</button>
            </div>
            <div className="order-number">訂單編號:20200308001</div>
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <Figure className="order-figure">
              <img className="" src="https://via.placeholder.com/200x150" alt="" />
            </Figure>
            <div className="order-price">
              NTD 200
            </div>
            <div className="order-status">待出貨</div>

          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between">
            <div className="account">消費者頭像+帳號</div>
            <div className="order-number">訂單編號:20200308001</div>
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <Figure className="order-figure">
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
            <div className="account">消費者頭像+帳號</div>
            <div className="order-number">訂單編號:20200308001</div>
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <Figure className="order-figure">
              <img className="" src="https://via.placeholder.com/200x150" alt="" />
            </Figure>
            <div className="order-price">
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