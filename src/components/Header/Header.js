import React, { useState } from 'react';
import amazonLogo from '../../assets/images/amazon_logo.png';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { useApp } from '../../contexts/AppContext';
const PANEL_LINKS = ["Today's Deals", 'Registry', 'Customer Service', 'Gift Cards', 'Sell', 'Shop'];
function SignInModal({ onClose }) {
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); if (!email.trim()) return; login({ name: name.trim() || email.split('@')[0], email: email.trim() }); onClose(); };
  return (
    <div className="modal-overlay" onClick={onClose}><div className="modal-box" onClick={(e) => e.stopPropagation()}>
      <button type="button" className="modal-close" onClick={onClose}>&times;</button><h2>Sign in</h2>
      <form onSubmit={handleSubmit}><label>Name<input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
      <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
      <button type="submit" className="btn-primary">Sign in</button></form></div></div>
  );
}
function Header() {
  const { cartCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const { searchQuery, setSearchQuery, goHome, goToCart } = useApp();
  const [showSignIn, setShowSignIn] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const handleSearch = (e) => { e.preventDefault(); setSearchQuery(localSearch); goHome(); };
  return (
    <header><div className="navbar">
      <button type="button" className="logo-btn" onClick={goHome}><img src={amazonLogo} alt="amazon logo" className="logo" /></button>
      <div className="nav-address"><p className="addfirsr">Deliver to</p><div className="addicon"><i className="fa-solid fa-location-dot" style={{ color: '#ffffff' }}></i><p className="addsecond">India</p></div></div>
      <form className="search-bar" onSubmit={handleSearch}><select className="search-select" defaultValue="All"><option>All</option></select>
      <input placeholder="Search Amazon" className="search-input" value={localSearch} onChange={(e) => setLocalSearch(e.target.value)} />
      <button type="submit" className="search-icon"><i className="fa-solid fa-magnifying-glass" style={{ color: '#ffffff' }}></i></button></form>
      <button type="button" className="nav-signing nav-btn" onClick={() => (isAuthenticated ? logout() : setShowSignIn(true))}>
        <p className="uppernav">Hello{isAuthenticated ? `, ${user.name}` : ', sign in'}</p><p className="lowernav">{isAuthenticated ? 'Sign Out' : 'Accounts & Lists'}</p></button>
      <button type="button" className="nav-returns nav-btn" onClick={goHome}><p className="uppernav">Returns</p><p className="lowernav">& Orders</p></button>
      <button type="button" className="cart nav-btn" onClick={goToCart}><i className="fa-solid fa-cart-shopping"></i>{cartCount > 0 && <span className="cart-count">{cartCount}</span>}Cart</button>
    </div><div className="panel"><div className="panel-all"><i className="fa-solid fa-bars"></i>All</div><div className="panel-ops">{PANEL_LINKS.map((l) => <p key={l}>{l}</p>)}</div><div className="deals"><p>Shop deals in electronics</p></div></div>
    {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}</header>
  );
}
export default Header;