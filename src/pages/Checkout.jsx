import React from 'react'
// import Navbar from "react-bootstrap/Navbar";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Timeline } from 'rsuite'

// import{ BrowserRouter as Link} from "react-router-dom";
import '../styles/jc/checkout.scss'
import 'rsuite/dist/styles/rsuite-default.css'

function Checkout() {
  return (
    <div className="container">
      <Row>
        <Col sm={2}>
          <Timeline>
            <Timeline.Item>結帳</Timeline.Item>
            <Timeline.Item>付款資訊</Timeline.Item>
            <Timeline.Item>確認訂單</Timeline.Item>
            <Timeline.Item>完成訂單</Timeline.Item>
          </Timeline>
        </Col>
        <Col sm={10}>
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
            <tfoot></tfoot>
          </Table>
        </Col>
      </Row>

      <div></div>

      <div>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
          <Col>3 of 3</Col>
          <Col>4 of 4</Col>
          <Col>5 of 5</Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
          <Col>3 of 3</Col>
          <Col>4 of 4</Col>
          <Col>5 of 5</Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
          <Col>3 of 3</Col>
          <Col>4 of 4</Col>
          <Col>5 of 5</Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
          <Col>優惠券</Col>
          <Col xs={4}>
            <span>
              <input type="text" placeholder="請輸入代碼"></input>
            </span>
          </Col>
          <Col>
            <Button className="checkbtn " block>
              <span>結帳</span>
            </Button>
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
