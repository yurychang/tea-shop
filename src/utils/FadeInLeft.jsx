import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInLeft } from 'react-animations'

const fadeLeftAnimate = keyframes`${fadeInLeft}`
const FadeInLeftDiv = styled.div`
  animation: 1s ${fadeLeftAnimate};
`

export default function FadeInLeft({ children, ...attr }) {
  return <FadeInLeftDiv {...attr}>{children}</FadeInLeftDiv>
}
