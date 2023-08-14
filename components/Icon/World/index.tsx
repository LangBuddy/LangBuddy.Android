import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { IconType } from "../types"
import { getColorBuIsFocused } from "../../../utils/commons/Icon"

export default function World({ isFocused }: IconType) {
    return <Svg
        width={20}
        height={20}
        fill="none"
    >
        <G clipPath="url(#a)">
            <Path
                fill={getColorBuIsFocused(isFocused || false)}
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm7.45 9.167h-2.897a15.307 15.307 0 0 0-1.908-6.176 7.511 7.511 0 0 1 4.806 6.176Zm-9.38 2.5h3.86A14.123 14.123 0 0 1 10 16.583a14.115 14.115 0 0 1-1.93-4.916Zm-.11-2.5c.234-2.047.932-4.014 2.04-5.75a13.535 13.535 0 0 1 2.04 5.75H7.96ZM7.356 2.99a15.307 15.307 0 0 0-1.908 6.176H2.55A7.51 7.51 0 0 1 7.355 2.99Zm-4.662 8.676h2.841c.28 1.876.897 3.685 1.821 5.342a7.517 7.517 0 0 1-4.662-5.342Zm9.952 5.342a15.736 15.736 0 0 0 1.82-5.342h2.842a7.518 7.518 0 0 1-4.662 5.342Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
}