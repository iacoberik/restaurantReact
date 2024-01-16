import RestaurantMenuList from "./RestaurantMenuList";
import { useRef } from "react";

const RestaurantMenu = ({ data, showItems, setShowIndex }) => {
  const myRef = useRef(null);

  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handelClick = () => {
    setShowIndex();
    setTimeout(() => {
      executeScroll();
    }, 0);
  };

  return (
    <div className="restaurant-menu_item mt-10" ref={myRef}>
      <div
        className="menu-category flex justify-between p-4 bg-gray-100 shadow-md cursor-pointer"
        onClick={handelClick}
      >
        <h3 className="font-bold text-2xl">
          {data?.card?.card?.title}{" "}
          <span>({data?.card?.card?.itemCards.length})</span>
        </h3>
        <span>A</span>
      </div>
      {showItems && (
        <div className="menu-category_items">
          {data?.card?.card?.itemCards.map((card) => {
            return (
              <div
                key={card.card?.info?.id}
                className="menu-item_list border-b"
              >
                <RestaurantMenuList data={card} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
