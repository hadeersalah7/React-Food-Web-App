import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import { formatter } from "../util/formatter";
import Button from "../UI/Button";
import UserProgressContext from "../store/UserProgressContext";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );
  const handleCloseModal = () => {
    userProgressCtx.hideCart();
  };
  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{formatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseModal}>
          Close
        </Button>
        <Button onClick={handleCloseModal}>Proceed to checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
