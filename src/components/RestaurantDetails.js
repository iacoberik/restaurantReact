import { useParams } from "react-router-dom";
import { useFetchMenu } from "../utils/useFetchMenu";

const RestaurantDetails = () => {
  const { id: resId } = useParams();
  const menuData = useFetchMenu(resId);
  console.log(menuData);

  return (
    <div className="pane--inner" style={{ marginBlock: "40px" }}>
      <h1>{menuData?.data?.cards[0]?.card?.card?.info?.name}</h1>
    </div>
  );
};

export default RestaurantDetails;
