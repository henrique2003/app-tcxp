import React from 'react'
import { Route } from 'react-router-dom'
import { Home, About, Questions, EmailConfirmation, Places, Profile } from '../pages'

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
      <Route path="/dashboard/perfil" component={Profile} />
    </>
  )
}

export default Routes
