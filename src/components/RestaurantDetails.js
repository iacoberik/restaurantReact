import { useParams } from "react-router-dom";
import { useFetchMenu } from "../utils/useFetchMenu";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantDetails = () => {
  const { id: resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const menuData = useFetchMenu(resId);
  const menuCategories =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return menuData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="pane--inner">
      <div className="menu-container mt-20">
        <div className="pb-20 flex justify-between content-center items-center gap-10">
          <div className="details-intro">
            <h2 className="text-6xl font-bold">
              {menuData?.data?.cards[0]?.card?.card?.info?.name}
            </h2>
            <p>
              {menuData?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
            </p>
          </div>
          <div className="details-rating flex flex-col items-center p-4 border rounded-lg shadow-lg shrink-0">
            <p className="text-2xl pb-2">
              {menuData?.data?.cards[0]?.card?.card?.info?.avgRating}
            </p>
            <p className="border-t-2 border-gray-300 text-lg">
              {menuData?.data?.cards[0]?.card?.card?.info?.totalRatingsString}
            </p>
          </div>
        </div>
        {menuCategories.map((category, index) => (
          <div key={category.card?.card?.title} className="accordion-item">
            <RestaurantMenu
              data={category}
              showItems={index === showIndex && true}
              setShowIndex={() => {
                setShowIndex(index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
