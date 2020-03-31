import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  padding: 0.375rem 1.125rem;
  border: none;
  background-color: #df641c;
  color: #fff;
`

export default function KeyBtn({ children, onClick, ...attr }) {
  return (
    <Btn onClick={onClick} {...attr}>
      {children}
    </Btn>
  )
}
