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

const ZoneItem = styled.div`
  display: flex;
  height: 180px;
  margin-top: -39px;
  margin-left: -6px;
`

const ZoneTitle = styled.div`
  margin-left: 2.5px;
  margin-right: 5px;
`

const ZoneContent = styled.div`
  height: 100%;
  padding-top: 55px;
  margin-left: 0;
`

function RegionAxis({
  data = [],
  activeZone,
  activeVendor,
  toggleFilter,
  fetchZones,
}) {
  useEffect(() => {
    fetchZones()
  }, [fetchZones])

  const mapZone = () => {
    return data.map(el => {
      return (
        <Zone key={el.zId}>
          <div className="dot" />
          <ZoneItem>
            <ZoneTitle>
              <VerticalLinkBtn
                onClick={() => toggleFilter('zone', el.zId, el.zone)}
                className={`m-0 ${activeZone == el.zId ? 'active' : ''}`}
              >
                {el.zone}
              </VerticalLinkBtn>
            </ZoneTitle>
            <ZoneContent className="sy_list sy_list-vertical">
              {el.companys.map(item => {
                return (
                  <div key={item.id} className="list-item">
                    <VerticalLinkBtn
                      className={
                        activeZone == el.zId || activeVendor == item.id
                          ? 'active'
                          : ''
                      }
                      onClick={() => toggleFilter('vendor', item.id, item.name)}
                    >
                      {item.name}
                    </VerticalLinkBtn>
                  </div>
                )
              })}
            </ZoneContent>
          </ZoneItem>
        </Zone>
      )
    })
  }

  return (
    <>
      <div className="sy_dotline">
        <Line />
        <div className="d-flex">{mapZone()}</div>
      </div>
    </>
  )
}

const mapStateToProps = ({ zones, events }) => {
  const { filterType, filterId } = events
  let activeZone = ''
  let activeVendor = ''
  if (filterType === 'zone') {
    activeZone = filterId
  } else if (filterType === 'vendor') {
    activeVendor = filterId
  }
  return { data: zones, activeZone, activeVendor }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFilter, fetchZones }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RegionAxis)
