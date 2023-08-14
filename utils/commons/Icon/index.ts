import { ConditionEnum } from "../../../components/Icon/types/enums"

export const getColorBuIsFocused = (isFocused: boolean) => {
    return isFocused? ConditionEnum.focused : ConditionEnum.inactive
}