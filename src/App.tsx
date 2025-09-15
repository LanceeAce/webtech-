

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup' 

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={
          <div>
            <Header />
            <Home />
          </div>
        } />
        
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  )
}

export default App