import React, { useEffect, useState } from 'react';

function Select({ onCategoryChange }) {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Erro ao buscar as categorias:', error);
        setError('Não foi possível carregar as categorias. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  function handleChange(event) {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  }

  return (
    <div>
      <h1>Categorias</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <select onChange={handleChange}>
        <option value="">Selecione uma categoria</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
