//ProdutoDetalhe.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, CircularProgress } from '@mui/material';
import '../index.css'

const ProdutoDetalhe = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }} style={{ marginBottom: '5rem', textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }} style={{ marginBottom: '5rem' }}>
        <Typography variant="h4" gutterBottom>
          Produto não encontrado
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }} style={{ marginBottom: '5rem' }}>
      <Typography variant="h4" gutterBottom>
        Detalhes do Produto
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              height="400"
              image={product.image}
              title={product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {product.description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Preço: R$ {product.price}
              </Typography>
            </CardContent>
            <Button variant="contained" color="primary" sx={{ mx: 2, mb: 2 }}>
              Adicionar ao Carrinho
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProdutoDetalhe;
