import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearCart());

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return cartItems.length > 0 ? (
    <button
      className="rounded-md px-4 py-2 text-sm font-medium"
      onClick={handleClearCart}
    >
      Clear Cart
    </button>
  ) : (
    <h2 className="text-2xl font-medium text-center">Cart is empty...</h2>
  );
};

export default Cart;
