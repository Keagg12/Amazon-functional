import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { getItemsFromProduct } from '../../data/productData';
function GridItem({ item, onAdd }) {
  return (<div className={item.wrapperClass} onClick={() => onAdd(item)} role="button" tabIndex={0}><img src={item.src} alt={item.alt || item.label} /><p style={item.labelStyle}>{item.label}</p></div>);
}
function ProductCard({ product }) {
  const { addItem } = useCart();
  const addFromItem = (item) => { const line = getItemsFromProduct(product).find((i) => i.id === `${product.id}-${item.wrapperClass}`); if (line) addItem(line); };
  const addAll = (e) => { e.preventDefault(); getItemsFromProduct(product).forEach(addItem); };
  const renderQuadGrid = () => (<div className="imoge"><div className="upimg">{product.topRow.map((item) => <GridItem key={item.wrapperClass} item={item} onAdd={addFromItem} />)}</div><div className="downimg">{product.bottomRow.map((item) => <GridItem key={item.wrapperClass} item={item} onAdd={addFromItem} />)}</div></div>);
  const renderKitchenGrid = () => (<div className="imoge"><div className="upimg2"><GridItem item={product.topItem} onAdd={addFromItem} /></div><div className="downimg2">{product.bottomRow.map((item) => <GridItem key={item.wrapperClass} item={item} onAdd={addFromItem} />)}</div></div>);
  const renderSingle = () => (<div className="imoge2" onClick={() => addItem(getItemsFromProduct(product)[0])} role="button" tabIndex={0}>{product.useOffiWrapper ? <div className="offi"><img src={product.src} alt={product.title} /></div> : <img src={product.src} alt={product.title} />}</div>);
  const content = product.layout === 'quad-grid' ? renderQuadGrid() : product.layout === 'kitchen-grid' ? renderKitchenGrid() : product.layout === 'single' ? renderSingle() : null;
  return (
    <div className="boxrest">
      <h2>{product.title}</h2>
      {content}
      <button type="button" className="see-more" onClick={addAll}>
        {product.seeMoreText}
      </button>
    </div>
  );
}
export default ProductCard;