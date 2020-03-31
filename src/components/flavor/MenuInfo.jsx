import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectByTea } from 'actions/flavor'

function MenuInfo({ flavors, targetTeaFlavors, selectByTea }) {
  const isOnly = targetTeaFlavors.length === 1 ? true : false

  const renderList = () => {
    return (
      <ul>
        {targetTeaFlavors.map(el => (
          <li
            key={el.id}
            className="link-btn mb-3"
            onClick={() => selectByTea(el.id)}
          >
            <i class="fas fa-leaf mr-2"></i>
            {el.name}
          </li>
        ))}
      </ul>
    )
  }
  const renderInfo = () => {
    const target = targetTeaFlavors[0]
    flavors.forEach(el =>
      el.outerflavors.forEach(el => {
        if (el.id === target.frontId) {
          target.front = el.name
        } else if (el.id === target.midId) {
          target.mid = el.name
        } else if (el.id === target.endId) {
          target.end = el.name
        }
      })
    )
    return (
      <div className="ml-5">
        <ul className="pl-0 mb-4">
          <li className="mb-2">
            <span
              className="fs-sm"
              style={{
                padding: '0px 3px',
                color: 'white',
                borderRadius: '3px',
                backgroundColor: 'rgb(160, 201, 153)',
              }}
            >
              前香
            </span>
            <span className="ml-2 text-ff">{target.front}</span>
            <p className="mt-1 mb-0 ml-3">{target.frontText}</p>
          </li>
          <li className="mb-2">
            <span
              className="fs-sm"
              style={{
                padding: '0px 3px',
                color: 'white',
                borderRadius: '3px',
                backgroundColor: 'rgb(220, 183, 148)',
              }}
            >
              中味
            </span>
            <span className="ml-2 text-ff">{target.mid}</span>
            <p className="mt-1 mb-0 ml-3">{target.midText}</p>
          </li>
          <li className="mb-2">
            <span
              className="fs-sm"
              style={{
                padding: '0px 3px',
                color: 'white',
                borderRadius: '3px',
                backgroundColor: 'rgb(172, 159, 150)',
              }}
            >
              後韻
            </span>
            <span className="ml-2 text-ff">{target.end}</span>
            <p className="mt-1 mb-0 ml-3">{target.endText}</p>
          </li>
        </ul>
        <p>{target.intro}</p>
      </div>
    )
  }

  return <div>{isOnly ? renderInfo() : renderList()}</div>
}

const mapStateToProps = ({ flavor }) => {
  return { ...flavor }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectByTea }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuInfo)
