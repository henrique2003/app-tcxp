import React, { useEffect } from 'react'
import { Welcome, ShortInfo, Info, Evaluation, DangerZone } from './components'

const Profile: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
