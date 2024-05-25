import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, CardMedia, Box, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', image: '', price: '', size: '', type: '' });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newProduct.id) {
      axios.put(`http://localhost:3001/products/${newProduct.id}`, newProduct)
        .then(response => {
          const updatedProducts = products.map(product =>
            product.id === newProduct.id ? response.data : product
          );
          setProducts(updatedProducts);
          setNewProduct({ name: '', description: '', image: '', price: '', size: '', type: '' });
          setShowForm(false);
        })
        .catch(error => console.error(error));
    } else {
      axios.post('http://localhost:3001/products', newProduct)
        .then(response => {
          const createdProduct = response.data;
          setProducts([...products, createdProduct]);
          setNewProduct({ name: '', description: '', image: '', price: '', size: '', type: '' });
          setShowForm(false);
        })
        .catch(error => console.error(error));
    }
  };

  const handleEdit = (product) => {
    setNewProduct(product);
    setShowForm(true);
  };

  const handleDelete = (productId) => {
    if (!productId) {
      console.error("ID do produto inválido:", productId);
      return;
    }
    
    axios.delete(`http://localhost:3001/products/${productId}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== productId));
      })
      .catch(error => console.error(error));
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>
      <Box textAlign="center" my={2}>
        <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Fechar Formulário' : 'Adicionar Produto'}
        </Button>
      </Box>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Descrição"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="URL da Imagem"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Preço"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Tamanho"
            name="size"
            value={newProduct.size}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Tipo de Produto</InputLabel>
            <Select
              name="type"
              value={newProduct.type}
              onChange={handleChange}
            >
              <MenuItem value="Camiseta">Camiseta</MenuItem>
              <MenuItem value="Blusa de frio">Blusa de frio</MenuItem>
              <MenuItem value="Calças">Calças</MenuItem>
              <MenuItem value="Shorts">Shorts</MenuItem>
            </Select>
          </FormControl>
          <Box textAlign="center" mt={2}>
            <Button variant="contained" color="primary" type="submit">
              {newProduct.id ? 'Atualizar Produto' : 'Cadastrar Produto'}
            </Button>
          </Box>
        </form>
      )}
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="300"
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Preço: R$ {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tamanho: {product.size}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tipo: {product.type}
                </Typography>
              </CardContent>
              <Box display="flex" justifyContent="space-between" padding={2}>
                <IconButton onClick={() => handleEdit(product)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(product.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
