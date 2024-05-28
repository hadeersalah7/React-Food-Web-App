import { useContext } from "react";
import Modal from "../UI/Modal";
import { formatter } from "../util/formatter";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Input from "../UI/Input";
import Button from "../UI/Button";
const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );
  const handleCloseModal = () => {
    progressCtx.hideCheckout();
  };
  return (
    <Modal open={progressCtx.progress === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total amount: {formatter.format(cartTotal)}</p>
        <Input label="Full-Name" id="full-name" type="text" />
        <Input label="E-Mail Address" id="email" type="email" />
        <div className="control-row">
          <Input type="text" id="postal-code" label="Postal Code" />
          <Input type="text" id="street" label="street" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCloseModal}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
