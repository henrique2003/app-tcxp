import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, About, Questions } from '../pages'
import { Header, Modal } from '../components'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Modal />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/perguntas" component={Questions} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
