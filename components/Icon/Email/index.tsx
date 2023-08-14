import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
import { IconType } from "../types"
import { getColorBuIsFocused } from "../../../utils/commons/Icon"

export default function Email({ isFocused }: IconType) {
    return <Svg
        width={20}
        height={20}
        fill="none"
    >
        <G fill={getColorBuIsFocused(isFocused || false)} clipPath="url(#a)">
            <Path d="m19.962 4.618-7.015 7.015a4.173 4.173 0 0 1-5.894 0L.038 4.618C.027 4.75 0 4.87 0 5v10a4.172 4.172 0 0 0 4.167 4.167h11.666A4.172 4.172 0 0 0 20 15V5c0-.13-.027-.25-.038-.382Z" />
            <Path d="m11.768 10.455 7.612-7.613A4.155 4.155 0 0 0 15.834.833H4.167A4.155 4.155 0 0 0 .62 2.843l7.612 7.612a2.506 2.506 0 0 0 3.537 0Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>

}