import React from 'react'
import { Link } from 'react-router-dom'
import { withCart } from 'hooks/useCartContext'

function MainBarCart({ cart }) {
  return (
    <>
      <Link to="/CartList" className="d-block pj_mainbarcart">
        <div className="pj_mainbarcart">
          <i className="fas fa-shopping-cart " />
          <div className="pj_mainbarcart-num pj_button1">{cart.cartCount}</div>
          <span className="d-lg-none ml-2">購物車</span>
        </div>
      </Link>
    </>
  )
}

export default withCart(MainBarCart)
