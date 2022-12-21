import React from 'react'
import { ICard } from './types'

function Card({children, extraStyle}: ICard) {
  return (
    <div className={`${extraStyle && extraStyle} flex flex-col bg-white p-3 rounded-lg`}>
      {children}
    </div>
  )
}

export default Card