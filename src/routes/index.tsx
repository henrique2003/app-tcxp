import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, About, Questions } from '../pages'
import { Header, Register } from '../components'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Register />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/perguntas" component={Questions} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
