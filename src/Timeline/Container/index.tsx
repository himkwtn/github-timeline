import React, { useState } from 'react'
import { GithubRepository } from '../../common/types'
import './Container.scss'
import TimelineCircle from './TimelineCircle'
import Language from './Language'
import { useIntersect } from './hooks'
import { parseDate } from './functions'

const Container = ({
  name,
  language,
  description,
  publishedDate,
  url
}: GithubRepository) => {
  const [ref, setRef] = useState<Element | null>(null)
  const visible = useIntersect(ref)
  return (
    <li ref={el => setRef(el)} className="repo-list">
      <div
        className={`flex flex-grow justify-center ${visible ? 'show' : ''} ${
          visible ? 'visible' : 'invisible'
        }`}
      >
        <div className="arrowr" />
        <div className="w-2/5 rounded-lg bg-white text-left p-4 leading-normal content break-words">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h2 className="font-bold text-xl">{name}</h2>
          </a>
          <p className="text-base">{description}</p>
          <hr className="h-px bg-gray-500" />
          <div
            className="flex items-center text-sm text-gray-600"
            style={{ justifyContent: 'space-between' }}
          >
            <Language language={language} />
            <span>{parseDate(publishedDate)}</span>
          </div>
        </div>
        <div className="arrowl" />
      </div>
      <TimelineCircle />
    </li>
  )
}

export default Container
