import { Snowflake } from "lucide-react";
import Theme from "../Constants/Theme";

const DividerWithIcon = ({ size = 24, text = "" }) => {
  return (
    <div className="flex items-center justify-center ">
      {/* Left Divider */}
      <div
        className="border-t border-1"
        style={{ borderColor: Theme.colors.text, width: "20%" }}
      ></div>

      {/* Icon */}
      <span className="mx-2">
        <Snowflake size={size}
          style={{ borderColor: Theme.colors.text }}
        />   
      </span>

      {/* Right Divider */}
      <div
        className="border-t border-1"
        style={{ borderColor: Theme.colors.text, width: "20%" }}
      ></div>
    </div>
  );
};

export default DividerWithIcon;
