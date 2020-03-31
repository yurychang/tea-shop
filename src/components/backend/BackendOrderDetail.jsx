import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

// const localId = sessionStorage.getItem('vendorOnlyId')




function BackendOrder(props) {
  const [orderDataDetail, setOrderDataDetail] = useState([])
  const [orderstatus, setOrderstatus] = useState(false)
  const getorderid = Number(props.match.params.orderid)
  console.log('getorderid', getorderid)


  //取得訂單列表
  async function getOrderFromServer() {
    const request = new Request('http://localhost:3333/vendor/getvendororder/' + getorderid, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('data', data);
    setOrderDataDetail(data)

    // console.log(orderData)

  }

  useEffect(() => {
    getOrderFromServer()
  }, [])

  const sumfunc = items => {
    let totalPrice = 0
    for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].productAmount * items[i].productPrice
    }
    return totalPrice
  }

  const changeProductStatus = event => {
    setOrderstatus(true)
  }

  // function test() {
  //   switch ()



  // }

  const backNumber = (<> <form className="col-6 mb-3" action="">
    <input className="form-control mb-2" type="text" />
    <button type="button" className="btn btn-primary" onClick={event => changeProductStatus(event)}>回報追蹤碼</button>
  </form></>)

  const backover = (<div className="card-header d-flex justify-content-between mb-4">
    <div className="order-status">運送中</div>
  </div>)


  const productli = (<>
    {orderDataDetail.map((value, index) => {
      return (
        <div className="card-body d-flex justify-content-between ls_productli row">
          <div className="ls_count col-1">{index + 1}、</div>
          <div className="ls_order-product-single col-5">{value.productName}</div>
          <div className="ls_order-price col-2">NTD {value.productPrice}</div>
          <div className="ls_order-count col-2">{value.productAmount}</div>
          <div className="ls_order-total col-2">{value.productPrice * value.productAmount}</div>
        </div>

      )
    })}
    <hr />

    <div className="card-body d-flex justify-content-end text-center ls_p12-0">
      <div className="w180px col-2">訂單總額</div>
      <div className="col-2">{sumfunc(orderDataDetail)}</div>
    </div>


    <div className="card-body d-flex justify-content-end text-center ls_p12-0">
      <div className="w180px col-2">運費</div>
      <div className="col-2">60</div>
    </div>

    <div className="card-header d-flex justify-content-end ls_bk-color text-center">
      <div className="w180px col-2">買家應付總額</div>
      <div className="font-weight-bold col-2">{sumfunc(orderDataDetail) + 60}</div>
    </div>


  </>)






  return (
    <>
      <div className="content">
        <h3>訂單管理</h3>
        <hr />
        <div className="order-area">
          <div className="d-flex justify-content-end">
            <Link className="btn btn-primary mb-2" to="/dashboard/order/">回上頁</Link>
          </div>
          {orderstatus ? backover : backNumber}


          <div className="">
            <ul className="col-6 mb-4">
              <li className="list-group">訂單編號：</li>
              <li className="list-group"></li>
            </ul>
          </div>
          <hr />

          <div className="">
            <ul className="col-6 mb-4">
              <li className="">購買者資訊：</li>
              <li className="">姓名：王小明</li>
              <li className="">電話：0900111222</li>
              <li className="">地址：台北市大安區復興南路1號</li>
            </ul>
          </div>


          <div className="payInfo">
            <h5 className="mb-4">付款資訊</h5>
          </div>

          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between ls_bk-color ">
              <div className="count col-1">編號</div>
              <div className="order-product-single col-5">商品</div>
              <div className="order-price col-2">單價</div>
              <div className="order-count col-2">數量</div>
              <div className="order-total col-2">小計</div>
            </div>
            {/* <div className="card-body d-flex justify-content-between">
              <div className="account">1、</div>
              <div className="order-product-single">蜜香綠茶</div>
              <div className="order-price">NTD 150</div>
              <div className="order-count">3</div>
              <div className="order-total">450</div>
            </div>


            <div className="card-body d-flex justify-content-between">
              <div className="account">2、</div>
              <div className="order-product-single">台茶18號</div>
              <div className="order-price">NTD 150</div>
              <div className="order-count">3</div>
              <div className="order-total">450</div> */}

            {productli}

            {/* </div> */}





          </div>


        </div>

      </div>

    </>
  )
}

export default withRouter(BackendOrder)