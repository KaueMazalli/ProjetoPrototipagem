import React from 'react';
import { Navigate } from 'react-router-dom';

const RotaProtegida = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Substitua pela sua lógica de autenticação

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RotaProtegida;
