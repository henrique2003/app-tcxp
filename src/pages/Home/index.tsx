import React from 'react'
import { Introduction, MostTravel, Decision, ThreeFeatures, Comments } from './components'

const Home: React.FC = () => {
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
