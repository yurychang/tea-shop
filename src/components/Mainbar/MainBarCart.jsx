import React from 'react'
import { Link } from 'react-router-dom'
import useCartNum from 'hook/useCartNum'

function MainBarCart() {
  const { shareCartNum } = useCartNum()
  return (
    <>
      <Link to="/CartList" className="d-block pj_mainbarcart">
        <div className="pj_mainbarcart">
          <i className="fas fa-shopping-cart " />
          <div className="pj_mainbarcart-num">{shareCartNum}</div>

          <span className="d-lg-none ml-2">購物車</span>
        </div>
      </Link>
    </>
  )
}

export default MainBarCart
