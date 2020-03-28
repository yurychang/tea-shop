import React, { useState, useEffect } from 'react'
import img1 from '../images/01.jpg'
import { withRouter } from 'react-router-dom'

function CartList(props) {
  const [product, setProduct] = useState([])
  const getproductid = Number(props.match.params.id)
  console.log(getproductid)

  async function getDataFromServer(props) {
    const request = new Request(
      'http://localhost:3333/product/get-single-product/' + getproductid,
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
    console.log(data)
    setProduct(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  console.log('product', product)
  console.log('product[0]', product[0])

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

                    <tbody>
                      <tr>
                        <th>
                          <input type="checkbox" />
                        </th>
                        <th scope="row">
                          <div className="p-2 ">
                            <img
                              className="pj_cartList-img"
                              src={img1}
                              alt=""
                            />
                          </div>
                        </th>
                        <td
                          className=" align-middle"
                          style={{ fontSize: '14px' }}
                        >
                          {props.tag}
                        </td>
                        <td className=" align-middle pj_white-space">
                          <strong>{props.tag}</strong>
                        </td>
                        <td className=" align-middle pj_white-space">
                          <strong>包</strong>
                        </td>
                        <td className=" align-middle pj_white-space">
                          <strong>$100</strong>
                        </td>
                        <td className=" align-middle pj_white-space">
                          <strong>3</strong>
                        </td>
                        <td className=" align-middle pj_white-space">
                          <strong>$100</strong>
                        </td>
                        <td className=" align-middle pj_white-space">
                          <button type="button" class="btn btn-outline-danger">
                            刪除
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="pj_cardList-price-amount">
                    <div className="pj_price">
                      <p className="pj_cardList-price">NT $320</p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-warning m-1 pj_cart-button"
                    >
                      購買
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
export default withRouter(CartList)
