import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleFilter } from 'actions/events'
import VerticalLinkBtn from './VerticalLinkBtn'

const Line = styled.div.attrs(props => ({
  className: 'line',
}))`
  margin-top: 30px;
`

const Zone = styled.div`
  flex: 1 0;
  padding-top: 0;
`

const ZoneContent = styled.div`
  height: 180px;
  margin-top: -39px;
  margin-left: -6px;
`

const ZoneTitle = styled.div`
  margin-left: 1px;
`

function RegionAxis({ data, toggleFilter }) {
  const mapZone = data => {
    return data.map(el => {
      return (
        <Zone key={el.zId.toString()}>
          <div className="dot" />
          <ZoneContent className="d-flex">
            <ZoneTitle className="mr-1">
              <VerticalLinkBtn
                onClick={() => toggleFilter('zone', el.zId)}
                className="m-0"
              >
                {el.zone}
              </VerticalLinkBtn>
            </ZoneTitle>
            <ul className="sy_list sy_list-vertical h-100 mt-3 ml-0">
              {el.include.map(item => {
                return (
                  <>
                    <li key={item.id.toString()} className="list-item">
                      <VerticalLinkBtn
                        onClick={() => toggleFilter('vendor', item.id)}
                      >
                        {item.name}
                      </VerticalLinkBtn>
                    </li>
                  </>
                )
              })}
            </ul>
          </ZoneContent>
        </Zone>
      )
    })
  }

  return (
    <>
      <div className="sy_dotline">
        <Line />
        <div className="d-flex">{mapZone(data)}</div>
      </div>
    </>
  )
}

const mapStateToProps = ({ events }) => {
  let data = events.vendors
  return { data }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionAxis)
