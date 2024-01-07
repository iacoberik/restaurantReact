import RestaurantCard from "./RestaurantCard";
import restaurantsApi from "../utils/mockdata";

const Body = () => {
  return (
    <div
      className="body-container"
      style={{ maxWidth: "1440px", margin: "auto" }}
    >
      <div className="search-container">Search...</div>
      <div className="restaurants-container" style={{ paddingBlock: "40px" }}>
        {restaurantsApi.map((rest) => (
          <RestaurantCard key={rest.info.id} restOptions={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
