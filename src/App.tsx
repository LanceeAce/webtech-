import { AuthProvider } from './context/AuthContext';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { Adopt } from './pages/Adopt';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Ang mga page na ito ay may kasamang header */}
        <Route path="/" element={
          <>
            <Header />
            <Home />
          </>
        } />
        <Route path="/adopt" element={
          <>
            <Header />
            <Adopt />
          </>
        } />
        <Route path="/about" element={
          <>
            <Header />
            <About />
          </>
        } />
        
        {/* Ang mga page na ito ay walang header */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
