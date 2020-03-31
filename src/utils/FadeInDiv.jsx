import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const fadeInAnimate = keyframes`${fadeIn}`
const FadeInD = styled.div`
  animation: 1.5s ${fadeInAnimate};
`

export default function FadeInDiv({ children, ...attr }) {
  return <FadeInD {...attr}>{children}</FadeInD>
}
