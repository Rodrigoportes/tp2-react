import { useState } from 'react';
import './App.css';
import Exercicio8 from './Componentes/Exercicio8';
import Products from './Componentes/Products';
import Usuarios from './Componentes/Usuarios';

function App() {
  const [count, setCount] = useState(0); 

  return (
    <>
        <Exercicio8 />
        <Products/>
        <Usuarios/>
      
    </>
  );
}

export default App;
