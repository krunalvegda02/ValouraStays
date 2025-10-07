import React from "react";
import HorizontalDivider from "../components/HorizontalDivider";
import Theme from "../Constants/Theme";

const HeaderTitle = ({
  title = "",
  size = "20",
  className = "",
  space = true,
}) => {
  return (
    <div
      className={`text-center w-full ${
        space ? "my-6 sm:my-10 md:my-12" : "my-0"
      } ${className}`}
    >
      <h2
        className={`
          font-semibold
          text-[${Theme.colors.text}]
          text-2xl sm:text-3xl md:text-3xl lg:text-3xl
          leading-tight tracking-wide
        `}
      >
        {title}
      </h2>

      {/* <div className="flex justify-center mt-3 sm:mt-4"> */}
        <HorizontalDivider size={size} />
      {/* </div> */}
    </div>
  );
};

export default HeaderTitle;
