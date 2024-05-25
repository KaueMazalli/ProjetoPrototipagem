//PaginaProtegida.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Importe a instância de autenticação corretamente

const PaginaProtegida = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        history.push('/');
      }
    });

    return () => unsubscribe();
  }, [history]);

  return (
    <div>
      {user ? (
        {children}
      ) : (
        <p>Você não está autenticado. Faça login para acessar esta página.</p>
      )}
    </div>
  );
};

export default PaginaProtegida;
