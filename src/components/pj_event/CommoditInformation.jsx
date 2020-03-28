import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import MainBarNav from '../../components/Mainbar/MainBarNav'

import '../../styles/pj/_pj.css'

function CommoditInformation(props) {
  const [product, setProduct] = useState([])
  const [amount, setAmount] = useState(1)
  console.log('amount')
  const [productCart, setProductCart] = useState(props)
  //  console.log('cartNum')const [cartmode, setCartmode] = useState(false)

  // const [buy, setBuy] = useState([])

  // const handleAddToCart = (title, price) =>
  //   setProductCart({
  //     title: props.title,
  //     price: props.price,
  //   })
  //handleAddToCart(productCart.title, productCart.price)

  // console.log('productNum', productNum)
  // console.log('productBuy', productBuy)

  const addToCartSubmit = e => {
    e.preventDefault()
    const productData = {
      title: props.title,
      tag: props.tag,
      price: props.price,
      unit: props.unit,
      sTime: props.sTime,
      feaTure: props.feaTure,
    }
    console.log(productData)
    AddToCartDataToServer(productData, () => alert('y'))
    async function AddToCartDataToServer(productData) {
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request(
        'http://localhost:3333/product/post-shoppingCart',
        {
          method: 'POST',
          body: JSON.stringify(productData),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )

      const response = await fetch(request)
      console.log('response', response)
      const data = await response.json()
      console.log(data)
      return data
    }
    // setCartmode(true)
  }
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
            <button
              className="pj_card-price-amount-add"
              style={{ visibility: amount < 1 && `hidden` }}
              onClick={() => setAmount(amount - 1)}
            >
              <span className="pj_card-span">-</span>
            </button>
            <input
              className="pj_card-price-input"
              type="textarea"
              value={amount}
            />
            <button
              className="pj_card-price-amount-add"
              onClick={() => setAmount(amount + 1)}
            >
              <span className="pj_card-span">+</span>
            </button>
          </div>
          <div className="pj_price">
            <p className="pj_card-price">NT ${props.price * amount}</p>
          </div>
        </div>

        <div className="pj_cart-btn">
          <button
            type="button"
            className="btn btn-outline-warning m-1 pj_cart-button"
            onClick={e => addToCartSubmit(e)}
          >
            加入購物車
            <img src="../../images/shopping_cart-24px.svg" alt="" />
          </button>

          <Link to="/CartList" className="d-block">
            <button
              type="button"
              className="btn btn-warning m-1 pj_cart-button"
              onClick={() => setProductCart(productCart)}
            >
              購買
              <i class="fas fa-credit-card" style={{ marginLeft: '15px' }}></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default withRouter(CommoditInformation)
