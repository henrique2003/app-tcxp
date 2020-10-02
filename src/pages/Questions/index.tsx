import React, { useEffect } from 'react'
import { Introduction, Contents } from './components'

const Questions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Introduction />
      <Contents />
    </>
  )
}

export default Questions
