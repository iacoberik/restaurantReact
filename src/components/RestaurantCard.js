import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name: restName,
    cloudinaryImageId: restImage,
    cuisines: cuisineName,
    avgRating,
    sla: { slaString: deliveryTime },
  } = props?.restOptions?.info;

  const [shadowBox, setShadownBox] = useState(
    "0 2px 4px #0e1e251f, 0 2px 16px #0e1e2552"
  );
  const [imgScale, setImgScale] = useState("1");
  const [imgOpacity, setImgOpacity] = useState("0.75");
  const [defaultTop, setDefaultTop] = useState("0");

  let cardStyle = {
    position: "relative",
    cursor: "pointer",
    aspectRatio: 12 / 16,
    borderRadius: "10px",
    flexDirection: "column",
    height: "400px",
    marginTop: "20px",
    transition: "all .2s ease-in-out",
    display: "flex",
    boxShadow: shadowBox,
    top: defaultTop,
    // marginInline: "auto",
    // maxWidth: "328px",
    overflow: "hidden",
  };

  let imgStyle = {
    height: "250px",
    // aspectRatio: 14 / 16,
    width: "100%",
    objectFit: "cover",
    scale: imgScale,
    opacity: imgOpacity,
    transition: "all .25s ease-in-out",
  };

  return (
    <div
      className="restaurant-card"
      style={cardStyle}
      onMouseEnter={() => {
        setShadownBox(
          "rgba(14, 30, 37, 0.24) 0px 2px 6px 0px, rgba(14, 30, 37, 0.42) 0px 2px 20px 0px"
        );
        setImgScale("1.1");
        setImgOpacity("1");
        setDefaultTop("-5px");
      }}
      onMouseLeave={() => {
        setShadownBox("0 2px 4px #0e1e251f, 0 2px 16px #0e1e2552");
        setImgScale("1");
        setImgOpacity("0.75");
        setDefaultTop("0");
      }}
    >
      <div
        className="restaurant-img_container"
        style={{ overflow: "hidden", maxHeight: "250px" }}
      >
        <img src={CDN_URL + restImage} style={imgStyle} alt="rest-img"></img>
      </div>
      <div className="restaurant-details" style={{ padding: "10px" }}>
        <h3 className="details-title" style={{ marginBottom: "10px" }}>
          {restName}
        </h3>
        <p className="details-cuisine">
          Cuisine: {cuisineName.join(", ")}
          {/* {cuisineName.map((cuisin, index) => {
            return index > 0 ? (
              <span key={cuisin + id} className="datails-cuisine_region">
                , {cuisin}
              </span>
            ) : (
              <span key={cuisin + id} className="datails-cuisine_region">
                {" "}
                {cuisin}
              </span>
            );
          })} */}
        </p>
        <p className="datails-rating">Rating: {avgRating}</p>
        <p className="details-info">
          Delivery estimate time:{" "}
          <span className="details-info_time">{deliveryTime}</span>
        </p>
      </div>
    </div>
  );
};

export const promotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted-container">
        <label className="card-promoted">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
