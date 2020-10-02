import React, { useEffect } from 'react'
import { Introduction, MostTravel, Decision, ThreeFeatures, Comments } from './components'

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Introduction />
      <MostTravel />
      <Decision />
      <ThreeFeatures />
      <Comments />
    </>
  )
}

export default Home
