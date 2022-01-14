import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Header from './components/Header'
import PriceCounter from './components/PriceCounter'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <PriceCounter />
  </React.StrictMode>,
  document.getElementById('root')
)
