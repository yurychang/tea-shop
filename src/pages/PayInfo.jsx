import React, { useState } from 'react'
// import Navbar from "react-bootstrap/Navbar";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { Link, Redirect } from 'react-router-dom'
// import { Timeline, Icon } from 'rsuite'
// import 'rsuite/lib/styles/index.less'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// import{ BrowserRouter as Link} from "react-router-dom";
// import '../styles/jc/checkout.scss'
import '../styles/jc/payinfo.scss'

function Payinfo() {

  const [orderer, setOrderer] = useState('')
  const [ordererPhone, setOrdererPhone] = useState('')
  const [ordererAddress, setOrdererAddress] = useState('')
  const [addressee, setAddressee] = useState('')
  const [addresseePhone, setAddresseePhone] = useState('')
  const [address, setAddress] = useState('')

  const beforeDetail = JSON.parse(localStorage.getItem('cart'))
  const typeeee = typeof (beforeDetail)
  console.log(typeeee)
  let detail = beforeDetail.map((item)=> {return{pId:Object.values(item)[0],amount:Object.values(item)[12]}})

  console.log('beforeDetail', beforeDetail)

  const vendorId = beforeDetail[0].idVendor
  const couponId = '12354'

  const orderData = { vendorId, couponId, detail, orderer, ordererPhone, ordererAddress, addressee, addresseePhone, address }
  console.log('orderData', orderData)



  const handleSubmit = (event) => {
    sendRegisterDataToServer(orderData, () => alert('訂單送出'))
    async function sendRegisterDataToServer(userData, callback) {
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request('http://localhost:3333/order/neworderdata', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const response = await fetch(request)
      console.log('response', response);
      const data = await response.json()
      callback()

    }

    event.preventDefault()

  }


  return (<>
    <div className="container">
      <Row>
        <Col sm={4}>
          <div class="timeline-small">
            <div class="timeline-small-body">
              <ul>
                <li>
                  <div class="bullet grey"></div>
                  {/* <div class="date">XXXX年XX月XX日</div> */}
                  <div class="desc">
                    <h3>結帳</h3>
                    {/* <h4>内容段落2内容段落2内容段落2内容段落2</h4> */}
                  </div>
                </li>
                <li>
                  <div class="bullet orange1"></div>
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
          <h1 className="h123">付款資訊</h1>
          <Form>
            <h4 className="h4form">訂購人資料</h4>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={2}>
                姓名
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  input
                  type="text"
                  placeholder="請輸入姓名"
                  required="required"
                  name="orderer"
                  onChange={e => setOrderer(e.target.value)}
                />
              </Col>
              <Form.Check
                type="radio"
                label="先生"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="女士"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPhone">
              <Form.Label column sm={2}>
                手機
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  input
                  type="text"
                  placeholder="請輸入手機"
                  oninput="value=value.replace(/[^\d]/g,'')"
                  maxLength="10"
                  name="ordererPhone"
                  onChange={e => setOrdererPhone(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalTel">
              <Form.Label column sm={2}>
                地址
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text" placeholder="請輸入地址"
                  name="ordererAddress"
                  onChange={e => setOrdererAddress(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label=" 記住我 " />
              </Col>
            </Form.Group>
            <h4 className="h4form">收件人資料</h4>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={2}>
                姓名
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="name" placeholder="請輸入姓名"
                  name="Addressee"
                  onChange={e => setAddressee(e.target.value)}
                />
              </Col>
              <Form.Check
                type="radio"
                label="先生"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="女士"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalPhone">
              <Form.Label column sm={2}>
                手機
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  input
                  type="text"
                  placeholder="請輸入手機"
                  oninput="value=value.replace(/[^\d]/g,'')"
                  maxLength="10"
                  name="ordererPhone"
                  onChange={e => setAddresseePhone(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalTel">
              <Form.Label column sm={2}>
                地址
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text" placeholder="請輸入地址"
                  name="ordererAddress"
                  onChange={e => setAddress(e.target.value)}
                />
              </Col>
            </Form.Group>
            <h4 className="h4form">信用卡付款</h4>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                卡號
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="email" placeholder="****" maxLength="4" />
              </Col>
              <Col sm={2}>
                <Form.Control type="email" placeholder="****" maxLength="4" />
              </Col>
              <Col sm={2}>
                <Form.Control type="email" placeholder="****" maxLength="4" />
              </Col>
              <Col sm={2}>
                <Form.Control type="email" placeholder="****" maxLength="4" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                有限期限
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="email" placeholder="**" maxLength="2" />
              </Col>
              <p>月</p>
              <Col sm={2}>
                <Form.Control type="email" placeholder="**" maxLength="2" />
              </Col>
              <p>年</p>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                後三碼
              </Form.Label>
              <Col sm={2}>
                <Form.Control type="email" placeholder="***" maxLength="3" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col lg={{ span: 10, offset: 2 }}>
                <Link to="/ordercomplete">
                  <Button className="confirm" type="submit" size="" onClick={event => handleSubmit(event)}>
                    確認送出
                  </Button>
                </Link>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  </>)
}
export default Payinfo
