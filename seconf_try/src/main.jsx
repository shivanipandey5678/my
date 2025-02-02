import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import AuthContectProvider from './Context/Authcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContectProvider>
    <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </AuthContectProvider>
)
