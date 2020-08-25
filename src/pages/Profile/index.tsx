import React from 'react'
import { Welcome, ShortInfo, Info, Evaluation } from './components'

const Profile: React.FC = () => {
  return (
    <>
      <Welcome />
      <ShortInfo />
      <Info />
      <Evaluation />
    </>
  )
}

export default Profile
