import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectByTea } from 'actions/flavor'
import styled from 'styled-components'

const Circle = styled.span`
  display: inline-block;
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
`

const VerticleLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 4px;
  z-index: -1;
  width: 2px;
  background-color: #ddd;
`

const LineLink = styled.p`
  &.active {
    font-size: 1.125rem;
    color: #df641c;
  }
`

function MenuList({ teaFlavors, targetTeaFlavors, selectByTea }) {
  const targetId =
    targetTeaFlavors?.length === 1 ? targetTeaFlavors[0].id : null

  return (
    <ul className="mr-4 pl-0 d-flex position-relative flex-column" style={{flex: '0 0 auto'}}>
      <VerticleLine />
      {teaFlavors?.map(el => {
        const isActive = el.id === targetId ? 'active' : ''
        const isHidden = el.id === targetId ? '' : 'invisible'
        return (
          <li key={el.id} className="mb-2">
            <LineLink
              className={`link-btn d-flex align-items-center ${isActive}`}
              style={{backgroundColor: 'transparent'}}
              onClick={() => selectByTea(el.id)}
            >
              <Circle className={`bg-mainlight mr-3 ${isHidden}`} />
              {el.name}
            </LineLink>
          </li>
        )
      })}
    </ul>
  )
}

const mapStateToProps = ({ flavor }) => {
  return { ...flavor }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectByTea }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)
