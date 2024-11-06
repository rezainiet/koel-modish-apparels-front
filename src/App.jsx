import './App.css'
import Homepage from './pages/Homepage'
import { Navbar } from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
