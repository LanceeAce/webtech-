import { AuthProvider } from './context/AuthContext';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { Adopt } from './pages/Adopt';
import  Form  from './pages/Form';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Routes>
       
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

        <Route
          path="/form"
          element={
            <>
              <Header />
              <Form />
            </>
          }
        />
        
       
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
