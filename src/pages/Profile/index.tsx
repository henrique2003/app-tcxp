import React from 'react'
import { Welcome, ShortInfo, Info, Evaluation, DangerZone } from './components'

const Profile: React.FC = () => {
  return (
    <>
      <Welcome />
      <ShortInfo />
      <Info />
      <Evaluation />
      <DangerZone />
    </>
  )
}

export default Profile
