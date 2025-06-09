import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoDetails from './pages/TodoDetails';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css'; // Global styles

function App() {
  // State for theme: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'light'
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'light';
  });

  // Effect to apply data-theme attribute to html tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Persist theme preference
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
        <Routes>
          <Route
            path="/"
            element={
              <TodoList
                toggleTheme={toggleTheme} // Pass theme toggle function
                currentTheme={theme}      // Pass current theme for icon/text
              />
            }
          />
          <Route path="/todos/:id" element={<TodoDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;