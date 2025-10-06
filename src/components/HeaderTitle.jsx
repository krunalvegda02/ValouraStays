import React from "react";
import HorizontalDivider from "../components/HorizontalDivider";
import Theme from "../Constants/Theme";

const HeaderTitle = ({ 
  title = "", 
  size = "20", 
  className = "", 
  space = true 
}) => {
  return (
    <div
      className={`text-center w-auto ${space ? "my-10" : "my-0"} ${className}`}
    >
      <h1 className={`text-[${Theme.colors.text}]`}>{title}</h1>
      <HorizontalDivider size={size} />
    </div>
  );
};

export default HeaderTitle;
