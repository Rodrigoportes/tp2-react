import React, { useEffect, useState } from 'react';

function Products({ category }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category) { 
      async function fetchProducts() {
        try {
          setLoading(true);
          const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Erro ao buscar os produtos:', error);
          setError('Não foi possível carregar os produtos. Por favor, tente novamente mais tarde.');
        } finally {
          setLoading(false);
        }
      }

      fetchProducts();
    }
  }, [category]);

  return (
    <div>
      <h1>Produtos</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {!loading && products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Preço: ${product.price}</p>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
