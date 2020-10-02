import React, { useEffect } from 'react'
import { Introduction, Know, Wrapper } from './components'

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Introduction />
      <Know/>
      <Wrapper />
    </>
  )
}

export default About
