import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
// import addCart from 'hooks/addCart'
// import updateCartNum from 'hooks/updateCartNum'
// import deleteCart from 'hooks/deleteCart'
import '../../styles/pj/_pj.css'
import { withCart } from 'hooks/useCartContext'

function CommoditInformation({ product = {}, cart, ...props }) {
  const { addCart } = cart
  const [amount, setAmount] = useState(1)
  // const handleAddCart = (addCart, newAddCart) => {
  //   console.log('addCart')
  // }
  // const newList = { ...product, amount }
  // const addList = e => {
  //   localStorage.setItem('list', JSON.stringify(newList))

  //   console.log(addList)
  // }
  // const addList = e => {
  //   localStorage.setItem('list', JSON.stringify(product))

  //   console.log(addList)
  // }
  // console.log(deleteCart)

  return (
    <>
      {/* <button  onClick={() => {
    props.deleteCart(product.id)></button> */}

      <div className="card-body" style={{ padding: '0' }}>
        <h2 className="pj_card-title">{product.title}</h2>
        <div className="section5-text6"></div>
        <p className="pj_card-text">{product.feaTure}</p>
        <ul>
          <li>茶種:{product.tag}</li>
          <li>容量:{product.unit}</li>
          <li>保存期限：{product.sTime}年</li>
        </ul>

        <div className="pj_card-price-amount">
          <div className="amount d-flex">
            <p className="pj_card-price-p">數量</p>
            <button
              className="pj_card-price-amount-add pj_button"
              onClick={() => setAmount(amount - 1)}
              style={{
                width: '30px',
                height: '30px',
                padding: 0,
                visibility: amount < 1 && `hidden`,
              }}
            >
              -
            </button>
            <input
              className="pj_card-price-input"
              type="textarea"
              min="1"
              value={amount}
            />
            <button
              className="pj_card-price-amount-add pj_button"
              onClick={() => setAmount(amount + 1)}
              style={{
                width: '30px',
                height: '30px',
                padding: 0,
              }}
            >
              +
            </button>
          </div>
          <div className="pj_price">
            <p className="pj_card-price">NT ${product.price * amount}</p>
          </div>
        </div>

        <div className="pj_cart-btn">
          <button
            type="button"
            className="m-1 pj_cart-button pj_button2"
            onClick={() => {
              addCart(product, amount)
              // cartCount.setCartCount(num)
            }}
          >
            加入
            <i class="fas fa-shopping-cart" style={{ marginLeft: '15px' }}></i>
          </button>

          <Link to="/CartList" className="d-block">
            <button
              type="button"
              className="m-1 pj_cart-button pj_button"
              onClick={() => {
                addCart(product, amount)
              }}
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

export default withRouter(withCart(CommoditInformation))
