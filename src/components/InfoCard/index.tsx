import React from 'react'

import Card from '../Card'
import { IInfoCard } from './types'

function InfoCard({title, content}: IInfoCard) {
  return (
    <Card extraStyle='flex-1 items-center'>
      <h2 className='font-bold text-xl text-center'>{title}</h2>
      <h3 className='text-lg text-center'>{content}</h3>
    </Card>
  )
}

export default InfoCard