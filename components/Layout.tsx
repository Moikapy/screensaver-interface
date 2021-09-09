import React from 'react'
import { Navbar } from '.'
import NFT from '../types'

interface IProps {
  url?: string
  image?: string
  metadata?: NFT
}

const Layout: React.FC<IProps> = ({ children }) => {

  return (
    <div className={'mt-10 flex flex-col lg:pb-20 bg-gray-750 h-full relative pb-20'}>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout
