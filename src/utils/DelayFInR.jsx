import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeInRight } from 'react-animations'

const fadeRightAnimate = keyframes`${fadeInRight}`
const FadeInRightDiv = styled.div`
  animation: 1s ${fadeRightAnimate};
`

export default function DelayFInR({ delay = 0, children, ...attr }) {
  return (
    <FadeInRightDiv
      onAnimationEnd={function(e) {
        e.target.style.opacity = '100'
      }}
      style={{
        animationDelay: `${delay}s`,
        opacity: '0',
      }}
      {...attr}
    >
      {children}
    </FadeInRightDiv>
  )
}
