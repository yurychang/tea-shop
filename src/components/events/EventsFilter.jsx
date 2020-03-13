import React from 'react'
import styled from 'styled-components'
import VerticalLinkBtn from './VerticalLinkBtn'

const Zone = styled.div`
  flex: 1 0;
`

const ZoneContent = styled.div`
  height: 200px;
  margin-top: -39px;
`

const ZoneTitle = styled.div`
  margin-left: 1px;
`
const FilterLine = styled.div`
  padding-top: 32px;
`

export default function EventsFilter({className, ...attrs}) {
  return (
    <section className={`mb-5 ${className}`} {...attrs}>
      <FilterLine className="sy_dotline">
        <div className="line ml-2" />
        <div className="d-flex">
          <Zone>
            <div className="dot ml-2" />
            <ZoneContent className="d-flex">
              <ZoneTitle className="mr-1">
                <VerticalLinkBtn className="m-0">
                  北
                </VerticalLinkBtn>
              </ZoneTitle>
              <ul className="sy_list sy_list-vertical h-100 mt-3 ml-0">
                <li className="list-item">
                  <VerticalLinkBtn>
                    景泰茶葉
                  </VerticalLinkBtn>
                </li>
                <li className="list-item">
                  <VerticalLinkBtn>
                    銅鑼茶廠
                  </VerticalLinkBtn>
                </li>
                <li className="list-item">
                  <VerticalLinkBtn>
                    大溪老茶廠
                  </VerticalLinkBtn>
                </li>
              </ul>
            </ZoneContent>
          </Zone>
        </div>
      </FilterLine>
    </section>
  )
}
