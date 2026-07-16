import { FaShoppingCart } from "react-icons/fa";
import type { Product } from "../data/products";

type ProductProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

function ProductCard({ product, onAddToCart }: ProductProps) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button aria-label={`Add ${product.name} to cart`} onClick={() => onAddToCart(product)}>
        <FaShoppingCart /> Add to cart
      </button>
    </div>
  );
}

export default ProductCard;