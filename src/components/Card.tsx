import CardItem from "./CardItem"

function Card({cart,onUpdateQuantity, onRemove, total}) {
  if(cart.length === 0){
     return (
    <div className="cart empty">Your cart is empty</div>
  )
  }

  return (
    <div className="cart">
    <h2>Shopping Cart</h2>
    {cart.map(item => (
      <CardItem key={item.id} item={item} 
      onUpdateQuantity={onUpdateQuantity}
      onRemove={onRemove}
      />
    ))}
    <div className="cart-total">
      <h3>Total ${typeof total ? total : total.toFixed()}</h3>
      <button className="checkout-btn">Checkout</button>
    </div>
    </div>
  )
}

export default Card