import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ButtonDefault from "./ButtonDefault";
import Shimmer from "./Shimmer";
import useFecthRestaurants from "../utils/useFecthRestaurants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantsList] = useFecthRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setFilteredRestaurants(restaurantsList);
  }, [restaurantsList]);

  if (restaurantsList.length === 0) return <Shimmer />;

  const inputStyle = {
    display: "block",
    width: "100%",
    height: "50px",
    padding: "10px 20px",
    fontSize: "28px",
    borderRadius: "5px",
    borderWidth: "1px",
  };

  function searchSort(query) {
    const filteredRest = restaurantsList.filter((rest) =>
      rest.info.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRestaurants(filteredRest);
  }

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

  const resetRated = () => setFilteredRestaurants(restaurantsList);

  return (
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
          <Link key={rest.info.id} to={"/restaurant/" + rest.info.id}>
            <RestaurantCard restOptions={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
