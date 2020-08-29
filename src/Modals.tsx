import React from 'react'
import { Auth, OutGroup, DeleteAccount } from './components'

const Modals: React.FC = () => {
  return (
    <>
      <Auth />
      <DeleteAccount />
      <OutGroup />
    </>
  )
}

export default Modals
