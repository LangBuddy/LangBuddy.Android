import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { IconType } from "../types"

export default function Gender({ color }: IconType){
    return <Svg
    width={20}
    height={20}
    fill="none"
  >
    <G fill={color || "#000"} clipPath="url(#a)">
      <Path d="M8.333 15.833H6.667v-1.93a7.467 7.467 0 0 1 .178-11.306A5.845 5.845 0 0 0 5.833 2.5 5.833 5.833 0 0 0 5 14.1v1.733H3.333a.833.833 0 1 0 0 1.667H5v1.667a.833.833 0 0 0 1.667 0V17.5h1.666a.833.833 0 0 0 0-1.667Z" />
      <Path d="M18.333 0H15a.833.833 0 0 0 0 1.667h2.155l-2 2a5.857 5.857 0 1 0 1.178 1.18l2-2V5A.834.834 0 0 0 20 5V1.667A1.667 1.667 0 0 0 18.333 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
}