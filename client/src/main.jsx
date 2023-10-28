import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,
 } from 'react-router-dom'
import 'normalize.css'
import App from './App.jsx'
import { StateProvider } from "./context/StateProvider.jsx";
import { initialState } from "./context/initialState.js";
import reducer from "./context/reducer.js";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
)
