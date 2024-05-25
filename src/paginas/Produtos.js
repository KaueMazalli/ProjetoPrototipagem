//Produto.js
import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import axios from 'axios';
import '../index.css'
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Produtos
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="320"
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Preço: R$ {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Comprar</Button>
                <Button component={Link} to={`/produto/${product.id}`} size="small" color="primary">Detalhes</Button> {/* Certifique-se de que o link inclui o ID */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Produtos;
