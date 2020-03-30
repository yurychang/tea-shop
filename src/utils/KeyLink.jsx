import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NewLink = styled(Link)`
  padding: 0.375rem 1.25rem;
  border: none;
  background-color: #df641c;
  color: #fff;
`

export default function KeyBtn({ children, to, ...attr }) {
  return (
    <NewLink to={to} {...attr}>
      {children}
    </NewLink>
  )
}
