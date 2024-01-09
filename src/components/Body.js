import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ButtonDefault from "./ButtonDefault";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const inputStyle = {
    display: "block",
    width: "100%",
    height: "50px",
    padding: "10px 20px",
    fontSize: "28px",
    borderRadius: "5px",
    borderWidth: "1px",
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.612912&lng=77.2295097&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resp = await data.json();
    const restaurantsData =
      resp?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurantsData);
    setRestaurantsList(restaurantsData);
    setFilteredRestaurants(restaurantsData);
  };

  function highRated() {
    const filteredRest = restaurantsList.filter(
      (rest) => rest.info.avgRating > 4
    );
    setFilteredRestaurants(filteredRest);
  }

  function sortByRating() {
    let sortedList = [...restaurantsList];
    sortedList.sort((a, b) => b.info.avgRating - a.info.avgRating);
    setFilteredRestaurants(sortedList);
  }

  function searchSort(query) {
    const filteredRest = restaurantsList.filter((rest) =>
      rest.info.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRestaurants(filteredRest);
  }

  console.log("RENDERE");

  const resetRated = () => setFilteredRestaurants(restaurantsList);

  // CONDITIONAL RENDERING
  // if (restaurantsList.length === 0)
  //   return (
  //     <>
  //       <h2>Loading...</h2>
  //     </>
  //   );

  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className="body-container"
      style={{ maxWidth: "1440px", margin: "auto" }}
    >
      <div className="search-container">
        <input
          style={inputStyle}
          type="text"
          placeholder="Search for Restaurants"
          onChange={(e) => {
            setSearchQuery(e.target.value);
            searchSort(e.target.value);
          }}
          value={searchQuery}
        ></input>
      </div>
      <div className="filter" style={{ paddingTop: "40px" }}>
        <ButtonDefault
          onClick={highRated}
          buttonText="Top Rating"
          btnClass="filter-btn"
        />
        <ButtonDefault
          onClick={sortByRating}
          buttonText="Sort By Rating"
          btnClass="filter-btn"
        />{" "}
        <ButtonDefault
          onClick={resetRated}
          buttonText="Reset Filters"
          btnClass="filter-btn"
        />
      </div>
      <div className="restaurants-container" style={{ paddingBlock: "40px" }}>
        {filteredRestaurants.map((rest) => (
          <RestaurantCard key={rest.info.id} restOptions={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
