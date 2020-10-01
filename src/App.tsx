import React from 'react'
import { BrowserRouter, withRouter, RouteComponentProps } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Header, Footer } from './components'
import Modals from './Modals'
import Routes from './routes'
import store from './store'

import './global.css'

const App: React.FC = () => {
  // WithRouter Header
  const WithHeader = withRouter(({ location }: RouteComponentProps): JSX.Element => {
    if (location.pathname !== '/email/confirmar/' &&
      location.pathname !== '/opcoes/lugares'
    ) return <Header />
    else return <></>
  })

  // WithRouter Footer
  const WithFooter = withRouter(({ location }: RouteComponentProps): JSX.Element => {
    if (location.pathname === '/' ||
      location.pathname === '/sobre' ||
      location.pathname === '/duvidas'
    ) return <Footer />
    else return <></>
  })

  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* Header */}
        <WithHeader />
        {/* Hidden Modals */}
        <Modals />
        {/* Routes */}
        <Routes />
        {/* Footer */}
        <WithFooter />
      </BrowserRouter>
    </Provider>
  )
}

export default App
