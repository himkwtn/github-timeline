import React from 'react'
import { ICON, COLOR } from '../constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const IconWrapper = styled.div<{ iconColor: string }>`
  content: '';
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 0 0;
  margin-right: 5px;
  background-color: ${props => props.iconColor};
`

const Language = ({ language }: { language: string }) => {
  const lang = ICON[language]
  const color = COLOR[language]
  const icon = lang ? `devicon-${lang}-plain` : ''
  const iconColor = color ? color : icon ? '#FFF' : '#000'
  return (
    <Wrapper>
      <IconWrapper iconColor={iconColor}>
        <i className={icon} style={{ fontSize: '20px' }} />
      </IconWrapper>
      <span style={{ paddingRight: '20px' }}>{language}</span>
    </Wrapper>
  )
}

export default Language
