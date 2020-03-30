import React, { useState } from 'react'
// import Navbar from "react-bootstrap/Navbar";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import { Timeline, Icon } from 'rsuite'
// import 'rsuite/lib/styles/index.less'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// import{ BrowserRouter as Link} from "react-router-dom";
import '../styles/jc/checkout.scss'
import { number } from 'yup'

function Checkout() {

  const teststr = JSON.stringify([{
    title: "有機蜜韻紅茶補充包80g(手採)",
    tag: "紅茶",
    classIfy: "",
    price: "490",
    unit: "",
    sTime: "2",
    idVendor: "tunlo",
    feaTure: "",
    img: "150327607526.jpg",
    id: 2,
    amount: 5
  },{
    title: "有機蜜韻紅茶補充包80g(手採)",
    tag: "紅茶",
    classIfy: "",
    price: "490",
    unit: "",
    sTime: "2",
    idVendor: "tunlo",
    feaTure: "",
    img: "150327607526.jpg",
    id: 2,
    amount: 5
  }])

  localStorage.setItem('cart', teststr)
  const localCart = JSON.parse(localStorage.getItem('cart'))
  console.log(localCart)

  const sumfunc = items => {
    let totalPrice = 0
    for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].productAmount * items[i].productPrice
    }
    return totalPrice
  }


  const productli = (
    <>
      {localCart.map((value, index) => {
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
    </>)


  return (
    <div className="container">
      <Row>
        <Col sm={4}>
          <div className="timeline-small">
            <div className="timeline-small-body">
              <ul>
                <li>
                  <div className="bullet pink orange"></div>
                  <div className="desc">
                    <h3>結帳</h3>
                  </div>
                </li>
                <li>
                  <div className="bullet orange"></div>
                  <div className="desc">
                    <h3>付款資訊</h3>
                  </div>
                </li>
                <li>
                  <div className="bullet blue"></div>
                  <div className="desc">
                    <h3>完成訂單</h3>
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
            <tbody>
              {productli}
            </tbody>
            <tfoot></tfoot>
          </Table>
        </Col>
      </Row>
      <div></div>

      <div>
        <Row className="">
          <Col></Col>
          <Col></Col>
          <Col>優惠券</Col>
          <Col sm={3}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                請選擇優惠券代碼
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col sm={2}>
            <Button className="checkbtn " block>
              <span>結帳</span>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Checkout
