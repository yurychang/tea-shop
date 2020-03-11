import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import WrapFadeInRight from './WrapFadeInRight'
import logoH from '../images/logo-h.svg'

const fadeInAnimate = keyframes`${fadeIn}`
const FixBottom = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
`
const FixRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimate};
`
const listNames = ['尋茶', '文化走訪', '茗家精選', '茶風味輪', '台灣茶分布圖']

export default function MainBarContent({ isOpen, onClick }) {
  return (
    <>
      <div className="main-bar-content position-relative">
        <h1>
          <FadeInDiv>
            <Link to="/" onClick={onClick}>
              <img src={logoH} alt="湘茗" height="30px" className="ml-4 mt-2" />
            </Link>
          </FadeInDiv>
        </h1>
        <div className="flex-grow-1">
          <nav className="mx-auto mt-7">
            <ul className="sy_list sy_list-virticle mx-auto fs-lg">
              {listNames.map((listName, i) => {
                return (
                  <li className={i === 0 ? '' : 'mr-6'}>
                    <WrapFadeInRight delay={`.${i}`}>
                      <Link to="/" onClick={onClick} className="list-item">
                        {listName}
                      </Link>
                    </WrapFadeInRight>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <FixBottom className="pb-4">
          <FixRight>
            <WrapFadeInRight>0977-737-579</WrapFadeInRight>
          </FixRight>
          <div>
            <FadeInDiv className="fs-xs">
              Copyright © 2020 湘茗 Inc. All rights reserved
            </FadeInDiv>
          </div>
        </FixBottom>
      </div>
    </>
  )
}
