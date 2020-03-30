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
import '../styles/jc/payinfo.scss'

function payinfo() {
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
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalTel">
              <Form.Label column sm={2}>
                市話
              </Form.Label>
              <Col sm={6}>
                <Form.Control
                  input
                  type="text"
                  placeholder="請輸入市話"
                  oninput="value=value.replace(/[^\d]/g,'')"
                  maxLength="10"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalTel">
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
              <Form.Label column sm={2}>
                地址
              </Form.Label>
              <Form>
                <Form.Group
                  as="Row"
                  controlId="exampleForm.SelectCustomSizeSm"
                  className="dist"
                >
                  <select>
                    <option value>請選擇縣市</option>
                    <option value="0">基隆市</option>
                    <option value="1">臺北市</option>
                    <option value="2">新北市</option>
                    <option value="3">桃園市</option>
                    <option value="4">新竹市</option>
                    <option value="5">新竹縣</option>
                    <option value="6">苗栗縣</option>
                    <option value="7">臺中市</option>
                    <option value="8">彰化縣</option>
                    <option value="9">南投縣</option>
                    <option value="10">雲林縣</option>
                    <option value="11">嘉義市</option>
                    <option value="12">嘉義縣</option>
                    <option value="13">臺南市</option>
                    <option value="14">高雄市</option>
                    <option value="15">屏東縣</option>
                    <option value="16">臺東縣</option>
                    <option value="17">嘉義縣</option>
                    <option value="18">花蓮縣</option>
                    <option value="19">宜蘭縣</option>
                    <option value="20">金門縣</option>
                    <option value="21">連江縣</option>
                  </select>

                  {/* <select>
                    <option value>請選擇縣鎮市區</option>
                    <option value="100">中正區</option>
                    <option value="103">大同區</option>
                    <option value="104">中山區</option>
                    <option value="105">松山區</option>
                    <option value="106">大安區</option>
                    <option value="108">萬華區</option>
                    <option value="110">信義區</option>
                    <option value="111">士林區</option>
                    <option value="112">北投區</option>
                    <option value="114">內湖區</option>
                    <option value="115">南港區</option>
                    <option value="116">文山區</option>
                  </select> */}

                  {/* <Form.Control as="select" size="sm">
                    <option>台北市</option>
                    <option>新北市</option>
                    <option>基隆市</option>
                    <option>桃園市</option>
                    <option>新竹市</option>
                  </Form.Control> */}
                  <input type="text" size="30"></input>
                </Form.Group>
              </Form>
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
                  <Button className="confirm" type="submit" size="">
                    {' '}
                    確認送出{' '}
                  </Button>
                </Link>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
export default payinfo
