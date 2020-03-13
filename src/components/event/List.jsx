import React from 'react'
import styled from 'styled-components'

const SpaceList = styled.ul.attrs(props => ({
  className: 'sy_list',
}))`
  .list-item {
    margin-bottom: 1.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .list-link:hover {
    border-color: var(--mainlight);
  }
`

export default function List() {
  return (
    <SpaceList className="border-crude pl-2">
      <li className="list-item">
        <button className="list-link link-btn">半日茶師小旅行</button>
      </li>
      <li className="list-item">
        <button className="list-link link-btn">半日茶師小旅行</button>
      </li>
      <li className="list-item">
        <button className="list-link link-btn">半日茶師小旅行</button>
      </li>
    </SpaceList>
  )
}
