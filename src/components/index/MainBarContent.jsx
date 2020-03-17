import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import DelayFInR from 'utils/DelayFInR'
import logoH from 'images/logo-h.svg'

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

const BorderList = styled.ul.attrs( props => ({
  className: 'sy_list'
}))`
  .list-link {
    border-top: 1px solid;
  }
`

const listNames = [
  { name: '尋茶', path: '/' },
  { name: '文化走訪', path: '/events' },
  { name: '茗家精選', path: '/' },
  { name: '茶風味輪', path: '/' },
  { name: '台灣茶分布圖', path: '/' },
]

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
        <nav className="mx-auto mt-7">
          <BorderList className="sy_list sy_list-vertical border-always mx-auto fs-lg">
            {listNames.map((item, i) => {
              return (
                <li
                  key={i}
                  className={i === 0 ? 'list-item' : 'list-item mr-6'}
                >
                  <DelayFInR delay={`.${i}`}>
                    <Link
                      to={item.path}
                      onClick={onClick}
                      className="list-link"
                    >
                      {item.name}
                    </Link>
                  </DelayFInR>
                </li>
              )
            })}
          </BorderList>
        </nav>
        <FixBottom className="pb-4">
          <FixRight>
            <DelayFInR>0977-737-579</DelayFInR>
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
