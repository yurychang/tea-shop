import React from 'react'
import { Link } from 'react-router-dom'
import useCartNum from 'hook/useCartNum'

function MainBarCart() {
  const { shareCartNum } = useCartNum()
  return (
    <>
      <Link to="/CartList" className="d-block">
        <i className="fas fa-shopping-cart" />
        <span className="mainbarcart">{shareCartNum}</span>
        <span className="d-lg-none ml-2">購物車</span>
      </Link>
    </>
  )
}

export default MainBarCart
