// CategorySquare.js

import React from 'react';
import { Typography, Paper } from '@mui/material';

const CategorySquare = ({ title, onClick }) => {
  return (
    <Paper
      elevation={3}
      style={{
        width: '200px',
        height: '200px',
        margin: '10px',
        padding: '20px',
        cursor: 'pointer',
        backgroundColor: '#f0f0f0',
        transition: 'box-shadow 0.3s',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
      onMouseEnter={(e) => { e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)' }}
      onMouseLeave={(e) => { e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)' }}
    >
      <Typography variant="h6" align="center">
        {title}
      </Typography>
    </Paper>
  );
};

export default CategorySquare;
