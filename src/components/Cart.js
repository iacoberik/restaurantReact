import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearCart());

  const cartItems = useSelector((store) => store?.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  console.log(cartItems);

  return cartItems.length > 0 ? (
    <>
      <button
        className="rounded-md px-4 py-2 text-sm font-medium"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="orders">
        {cartItems.map((item, index) => {
          return (
            <div
              key={item.id + index}
              className="p-6 mb-3 flex justify-between items-center gap-10 "
            >
              <div>
                <h4 className="font-medium text-2xl">{item?.name}</h4>
                <span>$ {item?.price / 100}</span>
                <p className="text-xl font-light" style={{ color: "#c4c4c4" }}>
                  {item?.description}
                </p>
              </div>
              <div className="relative shrink-0">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    item?.imageId
                  }
                ></img>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total text-end">Total order: {totalPrice / 100} $</div>
    </>
  ) : (
    <h2 className="text-2xl font-medium text-center">Cart is empty...</h2>
  );
};

export default Cart;
