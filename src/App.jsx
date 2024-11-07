import './App.css'
import Homepage from './pages/Homepage'
import { Navbar } from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import OurStrength from './pages/OurStrength'
import Process from './pages/OurProcess'
import Product from './pages/Product'

function App() {
  return (
    <>
      <Navbar />
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/our-strength" element={<OurStrength />} />
        <Route path="/process" element={<Process />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
