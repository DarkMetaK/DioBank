import React from 'react'

import Header from '../Header'
import { ILayout } from './types'

function Layout({children}: ILayout) {
  return (
    <>
    <Header />
    <main>
      {children}  
    </main> 
    </>
  )
}

export default Layout