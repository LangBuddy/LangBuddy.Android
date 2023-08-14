import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { IconType } from "../types"
import { getColorBuIsFocused } from "../../../utils/commons/Icon"

export default function Calendar({ isFocused }: IconType) {
    return <Svg
        width={20}
        height={20}
        fill="none"
    >
        <G fill={getColorBuIsFocused(isFocused || false)} clipPath="url(#a)">
            <Path d="M0 15.833A4.172 4.172 0 0 0 4.167 20h11.666A4.172 4.172 0 0 0 20 15.833v-7.5H0v7.5Zm14.167-3.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-4.167 0a1.25 1.25 0 1 1 0 2.502 1.25 1.25 0 0 1 0-2.502Zm-4.167 0a1.25 1.25 0 1 1 0 2.501 1.25 1.25 0 0 1 0-2.5ZM15.833 1.667H15V.833a.833.833 0 1 0-1.667 0v.834H6.667V.833A.833.833 0 0 0 5 .833v.834h-.833A4.172 4.172 0 0 0 0 5.833v.834h20v-.834a4.172 4.172 0 0 0-4.167-4.166Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
}