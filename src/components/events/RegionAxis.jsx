import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleFilter } from 'actions/events'
import { fetchZones } from 'actions/zones'
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

function RegionAxis({ data = [], toggleFilter, fetchZones }) {
  useEffect(() => {
    fetchZones()
  }, [fetchZones])
  const mapZone = data => {
    return data.map(el => {
      return (
        <Zone key={el.zId.toString()}>
          <div className="dot" />
          <ZoneContent className="d-flex">
            <ZoneTitle className="mr-1">
              <VerticalLinkBtn
                onClick={() => toggleFilter('zone', el.zId, el.zone)}
                className="m-0"
              >
                {el.zone}
              </VerticalLinkBtn>
            </ZoneTitle>
            <ul className="sy_list sy_list-vertical h-100 mt-3 ml-0">
              {el.companys.map(item => {
                return (
                  <>
                    <li key={item.id.toString()} className="list-item">
                      <VerticalLinkBtn
                        onClick={() => toggleFilter('vendor', item.id, item.name)}
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

const mapStateToProps = ({ zones: data }) => {
  return { data }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFilter, fetchZones }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionAxis)
