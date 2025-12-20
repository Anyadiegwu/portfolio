import './App.css'
import Portfolio from './components/Portfolio'
import { Route, Router, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App
