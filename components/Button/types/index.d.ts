export interface IButton {
    title: string,
    onPress?: ((event: GestureResponderEvent) => void),
    color: ButtonType
}

export type ButtonType = 'linear' | 'solid';   

type TextColorType = {
    color: string
}

type ButtonColorType = {
    backgroundColor: string,
    borderBlockColor?: string,
    borderStyle?: string,
    borderWidth?: number,
}

export type ButtonStylesColorType = {
    colorButton: ButtonColorType,
    colorText: TextColorType,
}