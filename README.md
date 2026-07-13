
  # custom-hooks

  A small Vite + React + TypeScript workspace for experimenting with reusable custom React hooks.

  This repository demonstrates a minimal app structure, a sample `useCart` hook (placeholder), simple product data, and a few UI components.

  **Highlights**
  - **TypeScript**: typed data models and components
  - **Vite**: fast dev server and build
  - **React**: components and hooks under `src/`

  **Status**: Hook implementations are a work in progress — README documents intended API and structure.

  **Usage**

  Installation:

  ```bash
  npm install
  npm run dev
  ```

  Build:

  ```bash
  npm run build
  npm run preview
  ```

  **Folder Structure**

  - [src/hooks/useCart.ts](src/hooks/useCart.ts) : custom hook for cart operations (placeholder)
  - [src/data/products.ts](src/data/products.ts) : sample `Product` type and mock product list
  - [src/components/ProductCard.tsx](src/components/ProductCard.tsx) : basic product card component
  - [src/components/Card.tsx](src/components/Card.tsx) and [src/components/CardItem.tsx](src/components/CardItem.tsx) : UI pieces
  - [src/App.tsx](src/App.tsx), [src/main.tsx](src/main.tsx) : app entry

  **Planned / Example API**

  The intended `useCart` hook should provide a simple cart API such as:

  ```ts
  type CartItem = { id: number; quantity: number };

  const { items, addItem, removeItem, clearCart, total } = useCart();

  // Example usage in a component
  function AddButton({ productId }: { productId: number }) {
    const { addItem } = useCart();
    return <button onClick={() => addItem(productId)}>Add</button>;
  }
  ```

  Note: `useCart` in [src/hooks/useCart.ts](src/hooks/useCart.ts) is currently empty — implement the hook to match the API above.

  **Project notes**
  - Sample product data lives in [src/data/products.ts](src/data/products.ts).
  - Components are intentionally minimal to focus on hook behavior.

  **Next steps**
  - Implement `useCart` in [src/hooks/useCart.ts](src/hooks/useCart.ts) and add unit tests.
  - Wire the cart hook into `ProductCard` and `Card` components.


