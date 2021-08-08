import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from 'react';
import CartProvider from "./context/CartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleOpen = () => {
    setCartOpen(true);
  }

  const handleClose = () => {
    setCartOpen(false);
  }
  return (
    <CartProvider>
      {
        cartOpen ?
          <Cart handleClose={handleClose} /> : null
      }
      <Header handleOpen={handleOpen} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
