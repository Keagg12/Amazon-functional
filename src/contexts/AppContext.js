import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [page, setPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const goHome = () => {
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToCart = () => {
    setPage('cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const value = {
    page,
    searchQuery,
    setSearchQuery,
    goHome,
    goToCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within AppProvider');
  }
  return ctx;
}
