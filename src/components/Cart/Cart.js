import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { useApp } from '../../contexts/AppContext';
function Cart() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const { goHome } = useApp();
  if (items.length === 0) return (<main className="main-content cart-page-wrap"><div className="cart-page empty-cart"><h1>Your Amazon Cart is empty</h1><p>Click products on the homepage to add them.</p><button type="button" className="btn-primary" onClick={goHome}>Continue shopping</button></div></main>);
  return (<main className="main-content cart-page-wrap"><div className="cart-page"><h1>Shopping Cart</h1><div className="cart-layout"><div className="cart-items">{items.map((item) => (
    <div key={item.id} className="cart-row"><img src={item.image} alt={item.name} /><div className="cart-row-info"><h3>{item.name}</h3><p className="cart-price">${item.price.toFixed(2)}</p><div className="cart-qty"><label>Qty</label><select value={item.quantity} onChange={(e) => updateQuantity(item.id, Number(e.target.value))}>{[1,2,3,4,5,6,7,8,9,10].map((n) => <option key={n} value={n}>{n}</option>)}</select><button type="button" className="cart-delete" onClick={() => removeItem(item.id)}>Delete</button></div></div><p className="cart-line-total">${(item.price * item.quantity).toFixed(2)}</p></div>
  ))}</div><div className="cart-summary"><p className="cart-subtotal">Subtotal ({items.reduce((s,i)=>s+i.quantity,0)} items): <strong>${subtotal.toFixed(2)}</strong></p><button type="button" className="btn-checkout" onClick={() => alert('Checkout coming soon — Stripe integration next.')}>Proceed to Checkout</button><button type="button" className="btn-secondary" onClick={goHome}>Continue shopping</button><button type="button" className="btn-link" onClick={clearCart}>Clear cart</button></div></div></div></main>);
}
export default Cart;