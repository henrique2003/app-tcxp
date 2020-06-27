import React from 'react'
import { Route } from 'react-router-dom'
import { Home, About, Questions } from '../pages'

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/duvidas" component={Questions} />
    </>
  )
}

export default Routes
