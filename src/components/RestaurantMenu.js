import UserContext from "../utils/UserContext";
import RestaurantMenuList from "./RestaurantMenuList";
import { useContext, useRef } from "react";

const RestaurantMenu = ({ data, showItems, setShowIndex }) => {
  const myRef = useRef(null);

  // const { loggedInUsor } = useContext(UserContext);

  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handelClick = () => {
    setShowIndex();
    setTimeout(() => {
      executeScroll();
    }, 500);
  };

  return (
    <div className="restaurant-menu_item mt-10" ref={myRef}>
      <div
        className="menu-category flex justify-between p-4 bg-gray-100 shadow-md cursor-pointer"
        onClick={handelClick}
      >
        <h3 className="font-bold text-2xl">
          {data?.card?.card?.title}
          <span>({data?.card?.card?.itemCards.length})</span>
        </h3>
        <span>
          {!showItems ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          )}
        </span>
      </div>
      {showItems && (
        <div className="menu-category_items">
          {data?.card?.card?.itemCards.map((card) => {
            return (
              <div
                key={card?.card?.info?.id}
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
