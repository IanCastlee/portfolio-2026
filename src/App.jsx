import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioPage } from './components/pages/PortfolioPage';

function App() {
  return (
    <ThemeProvider>
      <PortfolioPage />
    </ThemeProvider>
  );
}

export default App;
