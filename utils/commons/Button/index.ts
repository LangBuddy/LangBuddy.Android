import { styles } from "components/Button/style";
import { ButtonType } from "components/Button/types";
import { ButtonColorEnum } from "components/Button/types/enums";

export const getColorButton = (buttonType: ButtonType) => {
    switch (buttonType) {
        case ButtonColorEnum.linear:
            return styles.componentButtonLinear;
        case ButtonColorEnum.solid:
            return styles.componentButtonSolid;
        default: return styles.componentButtonSolid;
    }
}

export const getColorText = (buttonType: ButtonType) => {
    switch (buttonType) {
        case ButtonColorEnum.linear:
            return styles.componentButtonTextLinear;
        case ButtonColorEnum.solid:
            return styles.componentButtonTextSolid;
        default: return styles.componentButtonTextSolid;
    }
}