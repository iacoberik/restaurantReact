import RestaurantCard, { promotedRestaurantCard } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import ButtonDefault from "./ButtonDefault";
import Shimmer from "./Shimmer";
import useFecthRestaurants from "../utils/useFecthRestaurants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantsList] = useFecthRestaurants();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { userName, setUserName } = useContext(UserContext);
  const onlineStatus = useInternetStatus();
  const PromotedRestaurant = promotedRestaurantCard(RestaurantCard);
  // console.log(useContext(UserContext));
  useEffect(() => {
    setFilteredRestaurants(restaurantsList);
  }, [restaurantsList]);

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

  if (!onlineStatus) return <h1>Please check your internet conection</h1>;

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
      <div className="user-input_name mt-4">
        <input
          className="shadow-md rounded-md border h-10 inline-block"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <div className="restaurants-container" style={{ paddingBlock: "40px" }}>
        {filteredRestaurants.map((rest) => (
          <Link key={rest.info.id} to={"/restaurant/" + rest.info.id}>
            {rest.info.avgRating >= 4.3 ? (
              <PromotedRestaurant restOptions={rest} />
            ) : (
              <RestaurantCard restOptions={rest} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
