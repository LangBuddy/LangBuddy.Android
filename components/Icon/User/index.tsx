import Svg, { Path } from "react-native-svg";
import { IconType } from "../types";
import { defaultValues } from "../constants";

export default function User({ color }: IconType) {
    return <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            fill={color || defaultValues.color}
            d="M10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM10 11.667a7.508 7.508 0 0 0-7.5 7.5c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833a7.508 7.508 0 0 0-7.5-7.5Z"
        />
    </Svg>

}