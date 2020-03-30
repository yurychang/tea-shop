import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Figure from 'react-bootstrap/Figure'
import { NavLink, withRouter } from 'react-router-dom'




function BackendOrder() {

  const [orderData, setOrderData] = useState([])

  //取得訂單列表
  async function getOrderFromServer() {
    const request = new Request('http://localhost:3333/vendor/getvendorderlist', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('data', data);
    setOrderData(data)
    console.log('orderData', orderData)

  }

  useEffect(() => {
    getOrderFromServer()
  }, [])



  const orderli = (
    <>
      {orderData.map((value, index) => {
        return (
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between">
              <div className="ls_order-account">{value.memberId}(使用者id)
                <Link type="button" className="btn btn-main btn-sm ml-3" to={`/dashboard/order/detail/${value.id}`}>訂單詳情</Link>
              </div>
              <div className="order-number">訂單編號:{value.orderId}</div>
            </div>
            <div className="card-body d-flex justify-content-between align-items-center ls_back-order-body">
              <Figure className="ls_back-order-figure">
                <img className="" src="https://via.placeholder.com/200x150" alt="" />
              </Figure>
              <div className="order-price mr-7">
                NTD {value.totalPrice + 60}
              </div>
              <div className="order-status">待出貨</div>

            </div>
          </div>
        )
      })}
    </>)




  return (
    <>
      <div className="content">
        <h3>訂單管理</h3>
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


          {orderli}

        </div>



      </div>

    </>
  )
}

export default withRouter(BackendOrder)