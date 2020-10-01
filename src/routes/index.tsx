import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
  Request,
  CreateChat,
  EditChat
} from '../pages'

const Routes: React.FC = () => {
  return (
    <Switch>
      {/* Site */}
      <Route path="/" exact component={Home}/>
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
      <Route path="/dashboard/chat" exact component={Chat} />
      <Route path="/dashboard/chat/criar" component={CreateChat} />
      <Route path="/dashboard/chat/editar/:id" component={EditChat} />
      <Route path="/dashboard/solicitacoes" component={Request} />
      <Route path="/dashboard/denunciar/:id" component={Denounce} />
      {/* Default */}
      <Route component={Home}/>
    </Switch>
  )
}

export default Routes
