import React from 'react'
import { Route } from 'react-router-dom'
import {
  Home,
  About,
  Questions,
  EmailConfirmation,
  Places,
  Profile,
  Evaluation,
  Explore,
  Chat,
  Dashboard,
  Denounce,
  Request
} from '../pages'

const Routes: React.FC = () => {
  return (
    <>
      {/* Site */}
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/duvidas" component={Questions} />
      {/* Email */}
      <Route path="/email/confirmar" component={EmailConfirmation} />
      {/* Places */}
      <Route path="/opcoes/lugares" component={Places} />
      {/* Dashboard */}
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/perfil" component={Profile} />
      <Route path="/dashboard/avaliacao/:id" component={Evaluation} />
      <Route path="/dashboard/explorar" component={Explore} />
      <Route path="/dashboard/chat" component={Chat} />
      <Route path="/dashboard/solicitacoes" component={Request} />
      <Route path="/dashboard/denunciar/:id" component={Denounce} />
    </>
  )
}

export default Routes
