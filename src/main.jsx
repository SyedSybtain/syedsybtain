import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import { Suspense } from 'react'
import Loading from './components/Loading'

const App = lazy(()=> import("./App.jsx"))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
