import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FlavorChart from 'components/flavor/FlavorChart'
import MenuList from 'components/flavor/MenuList'
import MenuInfo from 'components/flavor/MenuInfo'
import PageTitle from 'utils/PageTitle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFlavor } from 'actions/flavor'

function Flavor({ fetchFlavor }) {
  useEffect(() => {
    fetchFlavor()
  }, [])
  return (
    <>
      <Container fluid className="pt-4 pt-lg-6 pb-4 pb-lg-7">
        <Row>
          <Col lg="1" className="offset-xl-1">
            <PageTitle>
              <span className="text-main mb-2">茶</span>風味輪
            </PageTitle>
          </Col>
          <Col>
            <div className="ml-7 mb-6" style={{ width: '700px' }}>
              <h2 className="h3 mb-4">如何挑選喜歡喝的茶？</h2>
              <p>
                茶的種類琳瑯滿目，常常爬了很多文後，還是不知道從哪挑起嗎？
                試試心茶獨家的茶葉風味輪，從你喜歡的口味開始吧！不管你是新手對茶葉沒什麼研究，或是喝茶多年的品茶老饕，都可簡單又快速的找到你喜歡喝的茶。
              </p>
              <p>
                風味輪凝聚了感官學、味覺色彩學、茶葉烘焙專門、泡茶鑑賞、設計師等等，不同領域的專業力量共同設計而成，希望透過文字呈現茶的風味，從泡茶時的香氣、入口的味道一直到最後尾韻，完整描述茶的風采。
              </p>
            </div>
            <Row className="d-flex">
              <Col sm="5" className="d-flex align-items-center">
                <div className="d-flex">
                  <MenuList />
                  <MenuInfo />
                </div>
              </Col>
              <Col sm="6">
                <FlavorChart />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchFlavor }, dispatch)
}

export default connect(null, mapDispatchToProps)(Flavor)
