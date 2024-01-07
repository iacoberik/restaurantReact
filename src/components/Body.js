import RestaurantCard from "./RestaurantCard";
import restaurantsApi from "../utils/mockdata";
import { useState } from "react";
import ButtonsFilter from "./ButtonsFilter";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(restaurantsApi);
  // const [searchQuery, setSearchQuery] = useState("");

  function highRated() {
    const filteredRest = restaurantsList.filter(
      (rest) => rest.info.avgRating > 4.5
    );
    setRestaurantsList(filteredRest);
  }

  function sortByRating() {
    let sortedList = [...restaurantsList];
    sortedList.sort((a, b) => b.info.avgRating - a.info.avgRating);

    setRestaurantsList(sortedList);
  }

  function searchSort(e) {
    // setSearchQuery(e.target.value);
    const filteredRest = restaurantsApi.filter((rest) =>
      rest.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setRestaurantsList(filteredRest);
  }

  const resetRated = () => setRestaurantsList(restaurantsApi);

  return (
    <div
      className="body-container"
      style={{ maxWidth: "1440px", margin: "auto" }}
    >
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for Restaurants"
          onInput={searchSort}
        ></input>
      </div>
      <div className="filter" style={{ paddingTop: "40px" }}>
        <ButtonsFilter
          onHighRated={highRated}
          onResetRated={resetRated}
          onSortByRating={sortByRating}
        />
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
