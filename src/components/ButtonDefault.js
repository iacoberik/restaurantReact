import React from "react";

const ButtonDefault = ({ onClick, buttonText, btnClass }) => {
  const btnDefault = {
    cursor: "pointer",
    paddingBlock: "15px",
    paddingInline: "20px",
    marginRight: "10px",
    borderRadius: "10px",
    borderWidth: "1px",
    fontWeight: "600",
  };
  return (
    <button className={btnClass} style={btnDefault} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default ButtonDefault;
