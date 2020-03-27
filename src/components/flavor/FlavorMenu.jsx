import React from 'react'
import { connect } from 'react-redux'
import MenuInfo from './MenuInfo'
import MenuList from './MenuList'

function FlavorMenu({ teaFlavors, targetTeaFlavors }) {
  return (
    <div className="d-flex align-items-center">
      <MenuList />
      <MenuInfo />
    </div>
  )
}

const mapStateToProps = ({ flavor }) => {
  return { ...flavor }
}

export default connect(mapStateToProps)(FlavorMenu)
