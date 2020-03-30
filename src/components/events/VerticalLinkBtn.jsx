import React from 'react'
import styled from 'styled-components'

const VerticalText = styled.span.attrs(props => ({
  className: 'vertical-rl link-btn',
}))`
  max-height: 100%;
`

export default function VerticalLinkBtn({ children, ...attrs }) {
  return <VerticalText {...attrs}>{children}</VerticalText>
}
