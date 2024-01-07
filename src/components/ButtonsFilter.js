import React from "react";

const ButtonsFilter = ({ onHighRated, onResetRated, onSortByRating }) => {
  return (
    <div className="filter" style={{ paddingTop: "40px" }}>
      <button
        className="filter-btn"
        style={{
          cursor: "pointer",
          paddingBlock: "15px",
          paddingInline: "20px",
        }}
        onClick={onHighRated}
      >
        Top Rated Restaurants
      </button>
      <button
        className="filter-btn"
        style={{
          cursor: "pointer",
          paddingBlock: "15px",
          paddingInline: "20px",
        }}
        onClick={onResetRated}
      >
        Reset Restaurants
      </button>
      <button
        className="filter-btn"
        style={{
          cursor: "pointer",
          paddingBlock: "15px",
          paddingInline: "20px",
        }}
        onClick={onSortByRating}
      >
        Sort Rated Restaurants
      </button>
    </div>
  );
};

export default ButtonsFilter;
