import React from 'react'
import { Auth, OutGroup, DeleteAccount, IniviteGroup } from './components'

const Modals: React.FC = () => {
  return (
    <>
      <Auth />
      <DeleteAccount />
      <IniviteGroup />
      <OutGroup />
    </>
  )
}

export default Modals
