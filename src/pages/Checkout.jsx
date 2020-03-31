import React, { useState, useEffect } from 'react'
// import Navbar from "react-bootstrap/Navbar";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
// import { Timeline, Icon } from 'rsuite'
// import 'rsuite/lib/styles/index.less'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { withCart } from 'hooks/useCartContext'

// import{ BrowserRouter as Link} from "react-router-dom";
// import '../styles/jc/checkout.scss'
import '../styles/jc/checkout.scss'

// import {initCoupon, getCoupon, getCouponList}
import { number } from 'yup'

const data = [
  {
    id: 2,
    coupon_code: 'pRW2',
    discount: 2222,
    status: 'valid',
  },
  { id: 3, coupon_code: 'pRW3', discount: 333, status: 'valid' },
  { id: 4, coupon_code: 'pRW4', discount: 444, status: 'valid' },
  { id: 5, coupon_code: 'pRW5', discount: 555, status: 'valid' },
  { id: 6, coupon_code: 'pRW5', discount: 666, status: 'valid' },
  { id: 7, coupon_code: 'pRW5', discount: 777, status: 'valid' },
  { id: 8, coupon_code: 'pRW5', discount: 888, status: 'valid' },
]
export const getCoupon = id => {
  const couponList = JSON.parse(localStorage.getItem('myCoupon'))
  const couponFoundList = couponList.filter((v, i) => {
    if (v.id === id) return v
  })
  return couponFoundList[0]
}

export const getCouponList = () => {
  return JSON.parse(localStorage.getItem('myCoupon'))
}

export const initCoupon = () => {
  localStorage.setItem('myCoupon', JSON.stringify(data))
}

function App() {
  useEffect(() => {
    initCoupon()
  }, [])

  return (
    <>
      <button onClick={() => console.log(getCoupon(3))} 取得 coupon></button>
    </>
  )
}



function Checkout({ cart }) {
  const cartData = cart.cart
  const { deleteCart, addCart } = cart
  // const teststr = JSON.stringify([
  //   {
  //     title: '有機蜜韻紅茶補充包80g(手採)',
  //     tag: '紅茶',
  //     classIfy: '',
  //     price: '490',
  //     unit: '',
  //     sTime: '2',
  //     idVendor: '5',
  //     feaTure: '',
  //     img: '150327607526.jpg',
  //     id: 2,
  //     amount: 5,
  //   },
  //   {
  //     title: '有機蜜韻紅茶補充包80g(手採)',
  //     tag: '紅茶',
  //     classIfy: '',
  //     price: '490',
  //     unit: '',
  //     sTime: '2',
  //     idVendor: '5',
  //     feaTure: '',
  //     img: '150327607526.jpg',
  //     id: 2,
  //     amount: 5,
  //   },
  // ])

  // localStorage.setItem('cart', teststr)

  // const localCart = JSON.parse(localStorage.getItem('cart'))
  // console.log(localCart)

  // const sumfunc = items => {
  //   let totalPrice = 0
  //   for (let i = 0; i < items.length; i++) {
  //     totalPrice += items[i].productAmount * items[i].productPrice
  //   }
  //   return totalPrice
  // }

  const productli = (
    <>
      {cartData.map((value) => {
        return (
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>{value.title}</td>
            <td>{value.unit}</td>
            <td>{value.price}</td>
            <td>{value.amount}</td>
            <td>{value.price * value.amount}</td>
            <td>
              <i className="fas fa-trash"></i>
            </td>
          </tr>
        )
      })}
    </>
  )

  return (
    <div className="container">
      <Row>
        <Col sm={4}>
          <div className="timeline-small">
            <div className="timeline-small-body">
              <ul>
                <li>
                  <div class="bullet orange1"></div>
                  {/* <div class="date">XXXX年XX月XX日</div> */}
                  <div class="desc">
                    <h3 className="">結帳</h3>
                    {/* <h4>内容段落2内容段落2内容段落2内容段落2</h4> */}
                  </div>
                </li>
                <li>
                  <div class="bullet grey"></div>
                  {/* <div class="date">XXXX年XX月XX日</div> */}
                  <div class="desc">
                    <div className="bullet pink orange"></div>
                    <div className="desc">
                      <h3>結帳</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bullet orange"></div>
                  <div className="desc">
                    <h3>付款資訊</h3>
                  </div>
                </li>
                <li>
                  <div class="bullet grey"></div>
                  {/* <div class="date">XXXX年XX月XX日</div> */}
                  <div class="desc">
                    <div className="bullet blue"></div>
                    <div className="desc">
                      <h3>完成訂單</h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col sm={8}>
          <h1 className="h123">結帳</h1>
          <Table bordered hover variant="">
            <thead className="thbc">
              <tr>
                <th>
                  <input type="checkbox"></input>
                </th>
                <th>商品</th>
                <th>單位</th>
                <th>價格</th>
                <th>數量</th>
                <th>總計</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>{productli}</tbody>
          </Table>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>總金額</Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
      <div className="footrow">
        <div></div>

        <div>
          <Row className="">
            <Col></Col>
            <Col></Col>
            <Col>優惠券</Col>
            <Col sm={3}>
              <Dropdown className="dpdn">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  請選擇優惠券代碼
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col sm={2}>
              <Link to="/payinfo">
                <Button
                  className=" checkbtn "
                  onClick=" self.location.href='/PayInfo.jsx "
                  block
                >
                  <span>下一步</span>
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default withCart(Checkout)
