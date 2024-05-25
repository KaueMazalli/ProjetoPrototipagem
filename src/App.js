import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './paginas/Home';
import Products from './paginas/Produtos';
import Contact from './paginas/Contato';
import Dashboard from './paginas/Dashboard';
import ProdutoDetalhe from './paginas/ProdutoDetalhe';
import Footer from './components/Footer';
import RotaProtegida from './components/RotaProtegida';
import Login from './paginas/Login';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <RotaProtegida>
              <Dashboard />
            </RotaProtegida>
          } 
        />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
