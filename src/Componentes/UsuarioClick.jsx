import React from 'react';

function UsuarioClick({ usuario }) {
  if (!usuario) return null; 

  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      <p><strong>ID:</strong> {usuario.id}</p>
      <p><strong>Nome:</strong> {usuario.name.firstname} {usuario.name.lastname}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Username:</strong> {usuario.username}</p>
      <p><strong>Telefone:</strong> {usuario.phone}</p>
      <p><strong>Endereço:</strong> {usuario.address.street}, {usuario.address.city}, {usuario.address.zipcode}</p>
    </div>
  );
}

export default UsuarioClick;
