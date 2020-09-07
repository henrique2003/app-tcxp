import React from 'react'
import { Auth, ConfirmDenounce, DeleteAccount, IniviteGroup } from './components'

const Modals: React.FC = () => {
  return (
    <>
      <Auth />
      <DeleteAccount />
      <IniviteGroup />
      <ConfirmDenounce />
    </>
  )
}

export default Modals
