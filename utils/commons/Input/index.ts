import { ConditionIconType } from "../../../components/Input/types"
import { ConditionIconEnum } from "../../../components/Input/types/enums"

export const getColorBuIsFocused = (isFocused: boolean) : ConditionIconType => {
    return isFocused? ConditionIconEnum.focused : ConditionIconEnum.inactive;
}