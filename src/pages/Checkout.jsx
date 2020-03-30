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

// import{ BrowserRouter as Link} from "react-router-dom";
// import '../styles/jc/checkout.scss'
import '../styles/jc/checkout.scss'
import React, {useEffect} from 'react'
import {initCoupon, getCoupon, getCouponList}

const data = [
  {
    id: 2,
    coupon_code: 'pRW2',
    discount: 2222,
    status: 'valid',
  },
  { id: 3, coupon_code: 'pRW3', discount: 333, status: 'valid' },
  { id: 4, coupon_code: 'pRW4', discount: 444, status: 'valid' },
  { id: 5, coupon_code: 'pRW4', discount: 555, status: 'valid' },
]
export const getCoupon = (id) => {
  const couponList=
  JSON.parse(localStorage.getItem('myCoupon'))
  const couponFoundList=couponList.filter((v,i)
  => {
    if(v.id === id) return v
  })
  return couponFoundList[0]
}

export const getCouponList=()=>{
  return JSON.parse(localStorage.getItem('myCoupon'))
}

export const initCoupon=()=>{
  localStorage.setItem('myCoupon', JSON.stringify(data))
}

function App(){
  useEffect(() => {
    initCoupon()
  }, []);

  return (
    <>
    <button onClick={()=>console.log(getCoupon(3))}取得 coupon></button>
    </>
  );
}

function Checkout() {
  return (
    <div className="container">
      <Row>
        <Col sm={4}>
          <div class="timeline-small">
            <div class="timeline-small-body">
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
                    <h3>付款資訊</h3>
                    {/* <h4>内容段落2内容段落2内容段落2内容段落2</h4> */}
                  </div>
                </li>
                <li>
                  <div class="bullet grey"></div>
                  {/* <div class="date">XXXX年XX月XX日</div> */}
                  <div class="desc">
                    <h3>完成訂單</h3>
                    {/* <h4>内容段落2内容段落2内容段落2内容段落2</h4> */}
                  </div>
                </li>
                {/* <li>
                  <div class="bullet green"></div>
                  <div class="date">XXXX年XX月XX日</div>
                  <div class="desc">
                    <h3>内容段落1</h3>
                    <h4>内容段落2内容段落2内容段落2内容段落2</h4>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          {/* <Timeline>
            <Timeline.Item>結帳</Timeline.Item>
            <Timeline.Item>付款資訊</Timeline.Item>
            <Timeline.Item>確認訂單</Timeline.Item>
            <Timeline.Item>完成訂單</Timeline.Item>
          </Timeline> */}
        </Col>
        <Col sm={8}>
          <h1 className="h123">結帳</h1>
          <Table bordered hover variant="">
            <thead class="thbc">
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
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>阿里山紅玉</td>
                <td>公斤</td>
                <td>70</td>
                <td>3</td>
                <td>210</td>
                <td>
                  <i class="fas fa-trash"></i>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>阿里山紅玉</td>
                <td>公斤</td>
                <td>70</td>
                <td>3</td>
                <td>210</td>
                <td>
                  <i class="fas fa-trash"></i>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>阿里山紅玉</td>
                <td>公斤</td>
                <td>70</td>
                <td>3</td>
                <td>210</td>
                <td>
                  <i class="fas fa-trash"></i>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>阿里山紅玉</td>
                <td>公斤</td>
                <td>70</td>
                <td>3</td>
                <td>210</td>
                <td>
                  <i class="fas fa-trash"></i>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>阿里山紅玉</td>
                <td>公斤</td>
                <td>70</td>
                <td>3</td>
                <td>210</td>
                <td>
                  <i class="fas fa-trash"></i>
                </td>
              </tr>
            </tbody>
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
        {/* <img src="" />
        <div class="">優惠券</div>
        <Button className="scoupon">
          <span>選擇優惠券</span>
        </Button> */}
      </div>
    </div>
  )
}
export default Checkout
