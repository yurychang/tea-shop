import React, { useState, useEffect } from 'react'
import img1 from '../images/01.jpg'
import { withRouter } from 'react-router-dom'
import addCart from 'hooks/addCart'
import deleteCart from 'hooks/deleteCart'
import updateCartNum from 'hooks/updateCartNum'
import { withCart } from 'hooks/useCartContext'

function CartList({ cart, ...props }) {
  const { deleteCart } = cart
  const getproductid = Number(props.match.params.id)
  console.log(getproductid)

  // console.log(localStorage.getItem('list'))
  // const cartData = localStorage.getItem('list')
  // const newcart = JSON.parse(cartData)
  // console.log('newcart', newcart)
  console.log(localStorage.getItem('cart'))
  const cartData = localStorage.getItem('cart')
  const newcart = JSON.parse(cartData)
  console.log('newcart', newcart)

  const sum = items => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  const newcart2 = (
    <>
      {newcart.map((value, index) => {
        return (
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th scope="row">
              <div className="p-2 ">
                <img
                  className="pj_cartList-img"
                  src={`http://localhost:3333/images/product/${value.img}`}
                  alt=""
                />
              </div>
            </th>
            <td className=" align-middle" style={{ fontSize: '14px' }}>
              {value.title}
            </td>
            <td className=" align-middle pj_white-space">
              <strong>{value.tag}</strong>
            </td>
            <td className=" align-middle pj_white-space">
              <strong>{value.unit}包</strong>
            </td>
            <td className=" align-middle pj_white-space">
              <strong>${value.price}</strong>
            </td>
            <td className=" align-middle pj_white-space">
              <strong>{value.amount}</strong>
            </td>
            <td className=" align-middle pj_white-space">
              <strong>${value.price * value.amount}</strong>
            </td>
            <td className=" align-middle pj_white-space">
              <button type="button" className="pj_button-rad">
                刪除
              </button>
            </td>
          </tr>
        )
      })}
      <tfoot className="">
        <div className="pj_price">
          <p className="pj_cardList-price">NT ${sum(newcart)}</p>
        </div>
      </tfoot>
    </>
  )
  return (
    <>
      <div className="container py-4">
        <div className="pj_cartList-bottom">
          <h2>購物車清單</h2>
        </div>
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded ">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="pj_thead">
                      <tr>
                        <th scope="col">
                          <input type="checkbox" name="" />
                        </th>
                        <th scope="col">
                          <div className="p-2 text-uppercase"></div>
                        </th>
                        <th scope="col">
                          <div className="p-2 text-uppercase pj_white-space">
                            商品
                          </div>
                        </th>
                        <th scope="col" className="">
                          <div className="p-2 text-uppercase pj_white-space">
                            茶種
                          </div>
                        </th>
                        <th scope="col" className="">
                          <div className="py-2 text-uppercase pj_white-space">
                            單位
                          </div>
                        </th>
                        <th scope="col" className="">
                          <div className="py-2 text-uppercase pj_white-space">
                            價格
                          </div>
                        </th>
                        <th scope="col" className="">
                          <div className="py-2 text-uppercase pj_white-space">
                            數量
                          </div>
                        </th>
                        <th scope="col" className="">
                          <div className="py-2 text-uppercase pj_white-space">
                            總數
                          </div>
                        </th>
                        <th scope="col" className="">
                          <div className="py-2 text-uppercase pj_white-space"></div>
                        </th>
                      </tr>
                    </thead>

                    <tbody>{newcart2}</tbody>
                  </table>

                  <div className="pj_cardList-price-amount">
                    <button type="button" className="pj_cart-button pj_button">
                      結帳
                      <i
                        class="fas fa-credit-card"
                        style={{ marginLeft: '15px' }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(withCart(CartList))
