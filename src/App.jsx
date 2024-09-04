import React, { useState } from 'react';
import './App.css';
import Exercicio8 from './Componentes/Exercicio8';
import Products from './Componentes/Products';
import Usuarios from './Componentes/Usuarios';
import Select from './Componentes/Select';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <>
      <Exercicio8 />
      <Select onCategoryChange={handleCategoryChange} />
      <Products category={selectedCategory} />
      <Usuarios />
    </>
  );
}

export default App;

