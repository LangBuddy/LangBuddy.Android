import Svg, { Path } from "react-native-svg"
import { IconType } from "../types"
import { defaultValues } from "../constants"

export default function Translate({ color }: IconType) {
    return <Svg
        width={20}
        height={20}
        fill="none"
    >
        <Path
            fill={color || defaultValues.color}
            d="m9.896 18.333 3.77-10h1.709l3.875 10h-1.813l-.854-2.625h-4l-.979 2.625H9.896Zm3.146-4.083H16l-1.458-4.042H14.5l-1.458 4.042Zm-9.709 1.583-1.145-1.145 4.25-4.25A18.285 18.285 0 0 1 5.03 8.594c-.41-.618-.767-1.26-1.073-1.927h1.813c.236.458.496.892.781 1.302.285.41.608.83.969 1.26a11.268 11.268 0 0 0 1.562-2.031C9.5 6.497 9.854 5.764 10.146 5H.833V3.333h5.834V1.667h1.666v1.666h5.834V5h-2.354c-.306.958-.712 1.9-1.22 2.823a14.567 14.567 0 0 1-1.864 2.635l2.042 2.063-.625 1.687L7.5 11.667l-4.167 4.166Z"
        />
    </Svg>
}