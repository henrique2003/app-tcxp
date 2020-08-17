import React from 'react'
import { BrowserRouter, Switch, withRouter, RouteComponentProps } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Header, Modal, Footer } from './components'
import Routes from './routes'
import store from './store'

import './global.css'

const App: React.FC = () => {
  // WithRouter Header
  const WithHeader = withRouter(({ location }: RouteComponentProps): JSX.Element => {
    if (location.pathname === '/' ||
      location.pathname === '/sobre' ||
      location.pathname === 'duvidas'
    ) return <Header />
    else return <></>
  })

  // WithRouter Footer
  const WithFooter = withRouter(({ location }: RouteComponentProps): JSX.Element => {
    if (location.pathname === '/' ||
      location.pathname === '/sobre' ||
      location.pathname === 'duvidas'
    ) return <Footer />
    else return <></>
  })

  return (
    <Provider store={store}>
      <BrowserRouter>
        <WithHeader />
        <Modal />
        <Switch>
          <Routes />
        </Switch>
        <WithFooter />
      </BrowserRouter>
    </Provider>
  )
}

export default App
