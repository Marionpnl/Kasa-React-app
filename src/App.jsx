import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Error from './pages/Error/index.jsx'
import Layout from './layout/Layout/index.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
