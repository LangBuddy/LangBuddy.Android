import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { IconType } from "../types"
import { defaultValues } from "../constants"

export default function CircleCross({ color }: IconType) {
    return <Svg
    width={25}
    height={25}
    fill="none"
  >
    <G fill={color || defaultValues.color} clipPath="url(#a)">
      <Path d="m15.93 7.597-3.43 3.43-3.43-3.43L7.597 9.07l3.43 3.43-3.43 3.43 1.473 1.473 3.43-3.43 3.43 3.43 1.473-1.473-3.43-3.43 3.43-3.43-1.473-1.473Z" />
      <Path d="M12.5 0A12.5 12.5 0 1 0 25 12.5 12.514 12.514 0 0 0 12.5 0Zm0 22.917A10.417 10.417 0 1 1 22.917 12.5 10.428 10.428 0 0 1 12.5 22.917Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={color || defaultValues.color} d="M0 0h25v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
}