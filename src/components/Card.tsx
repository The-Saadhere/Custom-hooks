import CardItem from "./CardItem"
import type { CartItem } from "../hooks/useCart"

export type CartItems = {
  cart: CartItem[]
  onUpdateQuantity: (productId: number, quantity: number) => void
  onRemove: (id: number) => void
  total: string | number
}

function Card({cart,onUpdateQuantity, onRemove, total} : CartItems) {
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
      <h3>Total ${typeof total === "string" ? total : total.toFixed()}</h3>
      <button className="checkout-btn">Checkout</button>
    </div>
    </div>
  )
}

export default Card