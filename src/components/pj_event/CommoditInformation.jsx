import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import '../../styles/pj/_pj.css'

function CommoditInformation(props) {
  const [product, setProduct] = useState([])
  const [amount, setAmount] = useState(1)
  console.log('amount')
  const [cartNum, setCarNum] = useState(0)
  console.log('cartNum')

  async function getDataFromServer() {
    // 開啟載入指示

    const request = new Request(
      'http://localhost:3333/product/get-single-product',
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
        }),
      }
    )

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setProduct(data)
    // return data
  }
  // 一開始就會開始載入資料
  useEffect(() => {
    getDataFromServer()
  }, [])
  console.log('props', props.title)
  console.log('product', product)
  console.log('amount', amount)

  
  return (
    <>
      <div className="card-body">
        <h2 className="pj_card-title">{props.title}</h2>
        <div className="section5-text6">
          <div className="pj_border-top">
            <h5 className="pj_border-name">日月潭老茶廠</h5>
          </div>
        </div>
        <p className="pj_card-text">{props.feaTure}</p>
        <ul>
          <li>茶種:{props.tag}</li>
          <li>容量:{props.unit}</li>
          <li>保存期限：{props.sTime}年</li>
        </ul>

        <div className="pj_card-price-amount">
          <div className="amount d-flex">
            <p className="pj_card-price-p">數量</p>
            <button onClick={() => setAmount(amount - 1)}>-</button>
            <input className="pj_card-price-input" type="text" value={amount} />
            <button onClick={() => setAmount(amount + 1)}>+</button>
          </div>
          <div className="pj_price">
            <p className="pj_card-price">NT ${props.price}</p>
          </div>
        </div>

        <div className="pj_cart-btn">
          <button
            type="button"
            className="btn btn-outline-warning m-1 pj_cart-button"
            onClick={() => setCarNum(cartNum + 1)}
          >
            加入購物車
            <img src="../../images/shopping_cart-24px.svg" alt="" />
          </button>
          <button type="button" className="btn btn-warning m-1 pj_cart-button">
            購買
            <i class="fas fa-credit-card" style={{ marginLeft: '15px' }}></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(CommoditInformation)
