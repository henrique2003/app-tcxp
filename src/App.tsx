import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Header, Modal } from './components'
import Routes from './routes'
import store from './store'

import './global.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Modal />
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
