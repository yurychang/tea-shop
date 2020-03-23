import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/pj/_pj.css'

function CommoditInformation({ ...attrs }) {
  const [cartnum, setCarNum] = useState(0)
  console.log('cartnum')

  const [product, setProduct] = useState([])

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

  return (
    <>
      <div className="card-body">
        <h2 className="card-title">阿里山清香烏龍茶 - 高山茶</h2>
        <div className="section5-text6">
          <div className="pj_border-top">
            {' '}
            <h5 className="pj_border-top-name">日月潭老茶廠</h5>
          </div>
        </div>
        <p className="pj_card-text">
          紅玉為使用有機栽培的茶菁製作而成的有機紅茶。茶乾聞起來有股薄荷的清新涼氣，沖泡時茶香四溢，茶湯口感飽滿收斂性強，同時薄荷的清涼感在口腔內慢慢擴散開來，這就是讓喜愛紅茶的茶友為之著迷的獨特性。
        </p>
        <ul>
          <li>容量：12包 / 50g</li>
          <li>保存期限：2年</li>
          <li>保存期限：2年</li>
        </ul>

        <div className="pj_card-price-amount">
          <div className="amount d-flex">
            <p className="pj_card-price-p">數量</p>
            <input className="pj_card-price-input" type="number" />
          </div>
          <div className="pj_price">
            <p className="pj_card-price">NT $320</p>
          </div>
        </div>

        <div className="pj_cart-btn">
          <button
            type="button"
            className="btn btn-outline-warning m-1 pj_cart-button"
            onClick={() => setCarNum(cartnum + 1)}
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
export default CommoditInformation
