import React, { useState } from 'react';

function Exercicio8() {
  const [valor, setValor] = useState('');

  function pegandoValor(event) {
    setValor(event.target.value);
  }

  return (
    <input type="text" value={valor} onChange={pegandoValor} />
  );
}

export default Exercicio8;
