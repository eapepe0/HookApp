import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HooksApp } from './HooksApp'
import { MainApp } from './09-useContext/MainApp'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* rodeamos el MainApp con  el BrowserRouter para poder usar react-router-dom */}
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
