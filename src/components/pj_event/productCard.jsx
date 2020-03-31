import React, { useState, useEffect } from 'react'
// import { withRouter } from 'react-router'
// import Slider from '@material-ui/core/Slider'
// import img1 from '../images/01.jpg'
// import img3 from '../images/favorite-24px.svg'
import cartIcon from 'images/shopping_cart-24px.svg'
import { Link } from 'react-router-dom'
import { withCart } from 'hooks/useCartContext'

function productCard({ product, cart }) {
  const el = product
  return (
    <>
      <div className="card h-100 border-0">
        <Link to={`/Commodity/${el.id}`} className="d-block">
          <img
            src={`http://localhost:3333/images/product/${el.img}`}
            className="card-img-top"
            alt=""
            style={{height: '200px'}}
          />
        </Link>
        <div className="card-body">
          {/* <div className="pj_container-button pj_cart-Flavor">
            <i className="far fa-heart mt-2 pj_icon" aria-hidden="true"></i>
          </div> */}
          <Link to={`/Commodity/${el.id}`} className="d-block">
            <p className="card-title" style={{ fontSize: '18px' }}>
              {el.title}
            </p>
          </Link>
          <p className="card-text" style={{ fontSize: '14px', maxHeight: '80px', overflow: 'hidden' }}>
            {el.feaTure}
          </p>
        </div>
        <div className="pj_card-footer">
          <div>$NT{el.price}</div>
          <img
            src={cartIcon}
            onClick={() => cart.addCart(el, 1)}
            alt=""
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </>
  )
}

export default withCart(productCard)
