import React, { useEffect, useState } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/users');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
        setError('Não foi possível carregar os usuários. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    fetchUsuarios();
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {!loading && usuarios.map(usuario => (
          <li key={usuario.id}>
            <h2>{usuario.name.firstname} {usuario.name.lastname}</h2>
            <p>Email: {usuario.email}</p>
            <p>Username: {usuario.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
          