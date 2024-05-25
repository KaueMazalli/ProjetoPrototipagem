//Contato.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import '../index.css'

const Contato = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar a mensagem
    alert('Mensagem enviada com sucesso!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="sm">
      <Box my={5} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Entre em Contato Conosco
        </Typography>
      </Box>
      <form onSubmit={handleSubmit} style={{ marginBottom: '5rem' }}>
        <TextField
          label="Nome"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Mensagem"
          name="message"
          value={form.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
        <Box textAlign="center" mt={3}>
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Contato;
