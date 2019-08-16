import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { Provider } from '../common/SessionContext'

import Header from '../containers/Header'
import Home from '../views/Home'
import Login from '../views/Login'
import Catalogo from '../views/Catalogo'
import Admin from '../views/Admin'

const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
    }
`

const App = () => {
  const [session, setSession] = useState({ usuarioLogado: 'Alan' })

  const newSession = {
    ...session,
    update: (obj) => {
      setSession({
        ...session,
        ...obj
      })
    }
  }

  return (
    <Provider value={newSession}>
      <BrowserRouter>
        <React.Fragment>
          <GlobalStyle />
          <Route path='/' component={Header} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/c/:category' component={Catalogo} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/login' component={Login} />
            <Redirect to='/' />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App
