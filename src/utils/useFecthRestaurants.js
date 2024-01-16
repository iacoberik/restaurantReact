import { useEffect, useState } from "react";
import { SWIGGY_REST_API } from "./constants";

const useFecthRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_REST_API);
      const resp = await data.json();
      const restaurantsData =
        resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurants(restaurantsData);
    } catch {}
  };
  return [restaurants];
};

export default useFecthRestaurants;
