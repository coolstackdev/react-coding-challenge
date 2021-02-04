import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'

import MessageList from './components/message-list'
import { makeTheme } from './helpers/theme'

const NewApp = require('./components/message-list').default

function renderApp(App) {
  const theme = makeTheme()
  
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>, 
    document.getElementById('root'))
}

renderApp(MessageList)

if (module.hot) {
  module.hot.accept('./components/message-list', () => {
    renderApp(NewApp)
  })
}
