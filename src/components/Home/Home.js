import React from 'react';
import ProductCard from '../Product/ProductCard';
import { productData, filterProducts } from '../../data/productData';
import { useApp } from '../../contexts/AppContext';
import beautyProductsImg from '../../assets/images/beauty_products.png';
const HERO_GRADIENT = 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgb(220, 218, 218) 100%)';
function Home() {
  const { searchQuery } = useApp();
  const filtered = filterProducts(productData, searchQuery);
  const heroStyle = { backgroundImage: `${HERO_GRADIENT}, url(${beautyProductsImg})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat' };
  return (
    <main className="main-content"><div className="hero-section-container">
      <div className="hero-section" style={heroStyle}></div>
      <div className="shop-container">{filtered.length === 0 ? <p className="no-results">No products match &quot;{searchQuery}&quot;</p> : (
        <div className="shop-section">{filtered.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      )}</div></div></main>
  );
}
export default Home;