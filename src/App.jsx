import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Error from './pages/Error/index.jsx'
import Layout from './layout/Layout/index.jsx'
import Logement from './pages/Logement/index.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
