import {FaTrash,FaPlus , FaMinus} from "react-icons/fa"
import type { Product } from "../data/products"
type CartItem = {
  item: Product
  onUpdateQuantity: () => void
  onRemove: () => void
}
function CardItem({item,onUpdateQuantity,onRemove}: CartItem) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        <div className="quantity-controls">
          <button
          onClick={()=>onUpdateQuantity(item.id,item.quantity - 1)}
          >
            <FaMinus />
          </button>
           <button
          onClick={()=>onUpdateQuantity(item.id,item.quantity + 1)}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <button
      className="remove-btn"
      onClick={()=>onRemove(item.id)}
      >
        <FaTrash />
      </button>
    </div>
  )
}

export default CardItem