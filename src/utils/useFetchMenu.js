import { useEffect, useState } from "react";
import { SWIGGY_REST_API_MENU } from "./constants";

export const useFetchMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchMenu(id);
  }, []);

  const fetchMenu = async (id) => {
    const data = await fetch(SWIGGY_REST_API_MENU + id);
    const json = await data.json();

    setRestaurantMenu(json);
  };
  return restaurantMenu;
};
