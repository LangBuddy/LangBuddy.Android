import React, { useState } from 'react';
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { ButtonColorEnum, ButtonColorType, ButtonStylesColorType } from './type';
import { styles } from './style';

interface IButton {
    title: string,
    onPress?: ((event: GestureResponderEvent) => void),
    color: ButtonColorType
}

export default function Button({ title, color, onPress }: IButton) {
    const [colorStyles, setColorStyles] = useState<ButtonStylesColorType>();

    React.useEffect(() => {
        switch (color) {
            case ButtonColorEnum.solid:
                setColorStyles({
                    colorButton: styles.componentButtonSolid,
                    colorText: styles.componentButtonTextSolid,
                });
                break;
            case ButtonColorEnum.linear:
                setColorStyles({
                    colorButton: styles.componentButtonLinear,
                    colorText: styles.componentButtonTextLinear,
                });
                break;
        }
    }, []);

    return (
        <TouchableOpacity style={{ ...styles.componentButton, ...colorStyles?.colorButton }}
            onPress={onPress}>
            <Text style={{ ...styles.componentButtonText, ...colorStyles?.colorText }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}