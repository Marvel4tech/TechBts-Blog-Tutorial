import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './context/Context.jsx'
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-tagsinput/react-tagsinput.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
  </StrictMode>,
)
