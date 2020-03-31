import React from 'react'
// import Navbar from "react-bootstrap/Navbar";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
// import { Timeline, Icon } from 'rsuite'
// import 'rsuite/lib/styles/index.less'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// import{ BrowserRouter as Link} from "react-router-dom";
// import '../styles/jc/checkout.scss'
import '../styles/jc/ordercomplete.scss'

function OrderComplete() {
  return (
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
                  <div class="bullet grey"></div>
                  {/* <div class="date">XXXX年XX月XX日</div> */}
                  <div class="desc">
                    <h3>付款資訊</h3>
                    {/* <h4>内容段落2内容段落2内容段落2内容段落2</h4> */}
                  </div>
                </li>
                <li>
                  <div class="bullet orange1"></div>
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
          <h1 className="h123">完成訂單</h1>
          <Form>
            <h5>已經完成訂購，可以前往訂單查詢</h5>
            <h4 className="h4form">訂購人資料</h4>
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={2}>
                姓名
              </Form.Label>
              <Col sm={4}>
                <Form.Control type="name" placeholder="請輸入姓名" />
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
                <Form.Control type="phone" placeholder="請輸入手機" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalTel">
              <Form.Label column sm={2}>
                市話
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="tel" placeholder="請輸入市話" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                信箱
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="email" placeholder="請輸入信箱" />
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
                <Form.Control type="name" placeholder="請輸入姓名" />
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
            <Form.Group as={Row} controlId="exampleForm.SelectCustom">
              <Link to="/">
                <Button className="confirm" type="submit" size="10">
                  {' '}
                  返回首頁{' '}
                </Button>
              </Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
export default OrderComplete
