import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { AppProvider, useApp } from './contexts/AppContext';
import './assets/styles/style.css';
function AppContent() {
  const { page } = useApp();
  return (<><Header />{page === 'cart' ? <Cart /> : <Home />}<Footer /></>);
}
function App() {
  return (<AuthProvider><CartProvider><AppProvider><AppContent /></AppProvider></CartProvider></AuthProvider>);
}
export default App;