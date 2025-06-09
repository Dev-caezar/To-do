// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import '../styles/todoList.css'; // Reusing for general styles

const NotFound = () => {
  return (
    <main className="not-found-container" role="alert" aria-live="assertive">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="back-button" aria-label="Go to home page">
        Go to Home
      </Link>
    </main>
  );
};

export default NotFound;