import './App.css'
import Card from './components/Card'
import ProductCard from './components/ProductCard'
import { useCart } from './hooks/useCart'
import { products } from './data/products'

function App() {
  const { cart, addToCart, removeFromCart, total, updatedQuantity } = useCart()

  return (
    <>
      <div>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} onAddToCart={addToCart} />
        ))}
      </div>
      <Card
        cart={cart}
        onUpdateQuantity={updatedQuantity}
        onRemove={removeFromCart}
        total={total}
      />
    </>
  )
}

export default App
