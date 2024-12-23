import { createRoot } from 'react-dom/client'
import { App } from '../src/app/App.jsx'
import '../src/app/routes.jsx'
import '../src/app/index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
)
