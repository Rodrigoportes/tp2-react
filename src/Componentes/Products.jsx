import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Novo estado para controlar o carregamento

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true); // Inicia o carregamento
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        setError('Não foi possível carregar os produtos. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      {loading && <p>Carregando...</p>} {/* Exibir "Carregando..." enquanto os dados estão sendo buscados */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibir mensagem de erro */}
      <ul>
        {!loading && products.map(product => ( // Exibir produtos somente quando não estiver carregando
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
