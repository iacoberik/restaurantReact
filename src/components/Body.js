import RestaurantCard from "./RestaurantCard";
import restaurantsApi from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(restaurantsApi);

  function highRated() {
    const filteredRest = restaurantsList.filter(
      (rest) => rest.info.avgRating > 4.5
    );
    setRestaurantsList(filteredRest);
  }

  const sortByRating = () => {
    let sortedList = [...restaurantsList];
    sortedList.sort((a, b) => b.info.avgRating - a.info.avgRating);

    setRestaurantsList(sortedList);
  };

  const resetRated = () => setRestaurantsList(restaurantsApi);

  return (
    <div
      className="body-container"
      style={{ maxWidth: "1440px", margin: "auto" }}
    >
      {/* <div className="search-container">Search...</div> */}
      <div className="filter" style={{ paddingTop: "40px" }}>
        <button
          className="filter-btn"
          style={{
            cursor: "pointer",
            paddingBlock: "15px",
            paddingInline: "20px",
          }}
          onClick={() => highRated()}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          style={{
            cursor: "pointer",
            paddingBlock: "15px",
            paddingInline: "20px",
          }}
          onClick={() => resetRated()}
        >
          Reset Restaurants
        </button>
        <button
          className="filter-btn"
          style={{
            cursor: "pointer",
            paddingBlock: "15px",
            paddingInline: "20px",
          }}
          onClick={() => sortByRating()}
        >
          Sort Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container" style={{ paddingBlock: "40px" }}>
        {restaurantsList.map((rest) => (
          <RestaurantCard key={rest.info.id} restOptions={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
