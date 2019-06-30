import React, { useState } from 'react'
import { Repository } from '../types'
import './Container.scss'
import TimelineCircle from './TimelineCircle'
import Language from './Language'
import styled from 'styled-components'
import { useIntersect } from './hooks'

const Wrapper = styled.div<{ visible: boolean }>`
  display: flex;
  flex-grow: 1;
  visibility: ${p => (p.visible ? 'visible' : 'hidden')};
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`
const Container = ({
  name,
  language,
  description,
  publishedDate
}: Repository) => {
  const [ref, setRef] = useState<Element | null>(null)
  const visible = useIntersect(ref)
  return (
    <li ref={el => setRef(el)}>
      <Wrapper visible={visible} className={visible ? 'show' : ''}>
        <div className="arrowr" />
        <div className="container">
          <div className="content">
            <h2>{name}</h2>
            <p>{description}</p>
            <Footer>
              <Language language={language} />
              <span>{publishedDate}</span>
            </Footer>
          </div>
        </div>
        <div className="arrowl" />
      </Wrapper>
      <TimelineCircle />
    </li>
  )
}

export default Container
