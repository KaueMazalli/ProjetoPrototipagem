import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BannerSlider from '../components/BannerSlider'; // Importando o BannerSlider
import CategorySquare from '../components/CategorySquare';
import { Box } from '@mui/material';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Inicialmente, exibir todos os produtos
      })
      .catch(error => console.error(error));
  }, []);

  // Função para filtrar produtos por tipo
  const filterProductsByType = (productType) => {
    const filtered = products.filter(product => product.type === productType);
    setFilteredProducts(filtered);
  }

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        
      </Typography>

      {/* Banner de Imagem Rotativo */}
      <BannerSlider />
      
      {/* 4 Quadrados de Categoria */}
      <Box display="flex" justifyContent="center" marginTop="20px">
        <CategorySquare title="Camisetas" onClick={() => filterProductsByType('Camiseta')} />
        <CategorySquare title="Calças" onClick={() => filterProductsByType('Calças')} />
        <CategorySquare title="Blusas de Frio" onClick={() => filterProductsByType('Blusa de frio')} />
        <CategorySquare title="Shorts" onClick={() => filterProductsByType('Shorts')} />
      </Box>

      {/* Seção de Produtos */}
      <Typography variant="h4" style={{ marginTop: '20px' }}>
        Produtos
      </Typography>
      <Grid container spacing={3}>
        {filteredProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea component={Link} to={`/produto/${product.id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
