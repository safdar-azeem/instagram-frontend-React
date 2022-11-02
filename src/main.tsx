import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider, Text } from '@mantine/core'
import theme from './theme/'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
