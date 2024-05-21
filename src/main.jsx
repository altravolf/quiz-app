import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from "notistack"
import QuizState from "./context/quizState.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizState>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <App />
        </BrowserRouter >
      </SnackbarProvider>
    </QuizState>
  </React.StrictMode>,
)
