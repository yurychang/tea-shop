import React from 'react'
import styled from 'styled-components'
import KeyBtn from 'utils/KeyBtn'

const Btn = styled(KeyBtn)`
  border: 1px solid #df641c;
  border-radius: .25rem;
  background-color: #fff;
  color: #df641c;
`

export default function OutLineBtn({ children, onClick, ...attr }) {
  return (
    <Btn onClick={onClick} {...attr}>
      {children}
    </Btn>
  )
}
