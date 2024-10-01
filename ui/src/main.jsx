import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Router from './routes/Router.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)
