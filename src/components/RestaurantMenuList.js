const RestaurantMenuList = ({ data }) => {
  return (
    <div className="p-6 mb-3 flex justify-between items-center gap-10 ">
      <div className>
        <h4 className="font-medium text-2xl">{data?.card?.info?.name}</h4>
        <span>$ {data?.card?.info?.price / 100}</span>
        <p className="text-xl font-light" style={{ color: "#c4c4c4" }}>
          {data?.card?.info?.description}
        </p>
      </div>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
          data?.card?.info?.imageId
        }
      ></img>
    </div>
  );
};

export default RestaurantMenuList;
