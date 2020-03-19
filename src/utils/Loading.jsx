import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Mask = styled.div`
  display: ${props => props.isLoading ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e2e8e287;
  z-index: 1071;
`

function Loading({ type, color, isLoading }) {
  return (
    <Mask isLoading={isLoading}>
      <ReactLoading type={type} color={color} height={30} width={30} />
    </Mask>
  )
}

const mapStateToProps = ({ isLoading }) => {
  return { isLoading }
}

export default connect(mapStateToProps)(Loading)
