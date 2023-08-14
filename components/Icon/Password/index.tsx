import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
import { IconType } from "../types"
import { getColorBuIsFocused } from "../../../utils/commons/Icon"

export default function Password({ isFocused }: IconType) {
    return <Svg
        width={20}
        height={20}
        fill="none"
    >
        <G clipPath="url(#a)">
            <Path
                fill={getColorBuIsFocused(isFocused || false)}
                d="M13.324 10.583v-2.25a.834.834 0 0 1 .833-.833h.834a.833.833 0 0 0 .833-.833v-.834A.834.834 0 0 1 16.657 5h2.238a.847.847 0 0 0 .768-.5c.282-.62.39-1.304.314-1.98A2.909 2.909 0 0 0 17.055 0a3.78 3.78 0 0 0-2.673 1.108l-6.59 6.588a6.14 6.14 0 0 0-3.235.04 6.25 6.25 0 0 0 2.35 12.23 6.274 6.274 0 0 0 5.357-4.524 6.112 6.112 0 0 0 .04-3.234l.54-.541c.289-.29.46-.676.48-1.084Zm-8.74 6.084a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h20v20H0z" />
            </ClipPath>
        </Defs>
    </Svg>
}