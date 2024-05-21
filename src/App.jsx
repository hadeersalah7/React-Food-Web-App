import { useEffect } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
