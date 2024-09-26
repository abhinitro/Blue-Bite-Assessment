import React from "react";

import CloudIcon from "../../icons/cloudy.svg";
import ClearDayIcon from "../../icons/clear-day.svg";
import RainIcon from "../../icons/rain.svg";
import ClockIcon from "../../icons/rain.svg";
import AddBoxIcon from "../../icons/add-box.svg";
import UpIcon from "../../icons/arrow-up.svg";
import eyeIcon from "../../icons/eye.svg";
import noEye from "../../icons/no-eye.svg";
import Location from "../../icons/location.svg";

interface IconProps {
    condition: string;
    width?: number;
    height?: number;
}

const SvgIcons: React.FC<IconProps> = ({ condition, width = 30, height = 30 }) => {
    const getIcon = (condition: string) => {
        switch (condition) {
            case "cloudy":
                return <img src={CloudIcon} alt="Cloudy" width={width} height={height} />;
            case "clear-day":
                return <img src={ClearDayIcon} alt="Clear Day" width={width} height={height} />;
            case "rain":
                return <img src={RainIcon} alt="Rain" width={width} height={height} />;
            case "add-box":
                return <img src={AddBoxIcon} alt="AddBox" width={width} height={height} />;
            case "arrow-up":
                return <img src={UpIcon} alt="Up" width={width} height={height} />;
            case "clock":
                return <img src={ClockIcon} alt="Up" width={width} height={height} />;
            case "eye":
                return <img src={eyeIcon} alt="eyeIcon" width={width} height={height} />;
            case "no-eye":
                return <img src={noEye} alt="noEye" width={width} height={height} />;
            case "location":
                return <img src={Location} alt="noEye" width={width} height={height} />;

            default:
                return null;
        }
    };

    return getIcon(condition);
};

export default SvgIcons;
