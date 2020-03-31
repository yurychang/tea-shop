import React from 'react'
import { withRouter } from 'react-router-dom'
import { withCart } from 'hooks/useCartContext'
import CartListItem from 'components/pj_event/CartListItem'
import { Link } from 'react-router-dom'

function CartList({ cart, ...props }) {
  const deleteCart = cart.deleteCart
  const cartData = cart.cart
  const sum = items => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

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
                    <tbody>
                      {cartData.map(el => (
                        <CartListItem product={el} deleteCart={deleteCart} />
                      ))}
                    </tbody>
                  </table>

                  <div className="pj_cardList-price-amount">
                    <div className="pj_price">
                      <p className="pj_cardList-price">
                        {/* NT ${newcart?.price * newcart?.amount} */}
                      </p>
                    </div>
                    <Link
                      type="button"
                      className="btn btn-warning m-1 pj_cart-button pj_button"
                      to="/checkout"
                    >
                      結帳
                      <i
                        class="fas fa-credit-card"
                        style={{ marginLeft: '15px' }}
                      ></i>
                    </Link>
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
