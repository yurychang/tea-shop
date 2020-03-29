import React from 'react'
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
// import '../styles/jc/checkout.scss'
import '../styles/jc/checkout.scss'

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
            <tfoot></tfoot>
          </Table>
        </Col>
      </Row>
      <div></div>

      <div>
        {/* <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
          <Col>3 of 3</Col>
          <Col>4 of 4</Col>
          <Col>5 of 5</Col>
        </Row> */}
        {/* <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
          <Col>3 of 3</Col>
          <Col>4 of 4</Col>
          <Col>5 of 5</Col>
        </Row> */}
        {/* <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
          <Col>3 of 3</Col>
          <Col>4 of 4</Col>
          <Col>5 of 5</Col>
        </Row> */}
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
