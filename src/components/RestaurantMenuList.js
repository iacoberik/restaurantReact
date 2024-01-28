import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuList = ({ data }) => {
  const dispatch = useDispatch();
  // const cart = useSelector((state) => console.log(state.cart.items));

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="p-6 mb-3 flex justify-between items-center gap-10 ">
      <div>
        <h4 className="font-medium text-2xl">{data?.card?.info?.name}</h4>
        <span>$ {data?.card?.info?.price / 100}</span>
        <p className="text-xl font-light" style={{ color: "#c4c4c4" }}>
          {data?.card?.info?.description}
        </p>
      </div>
      <div className="relative shrink-0">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            data?.card?.info?.imageId
          }
        ></img>
        <button
          className="absolute bottom-2 right-2 px-4 py-2 rounded-md bg-gray-300 font-medium text-sm"
          onClick={() => addToCart(data?.card?.info)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenuList;
