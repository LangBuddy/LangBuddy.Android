import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
import { ButtonColorEnum, ButtonColorType } from './type';
import { styles } from './style';

interface IButton {
    title: string,
    onPress?: ((event: GestureResponderEvent) => void),
    color: ButtonColorEnum
}

export default function Button({ title, color, onPress }: IButton) {
    const [colorStyles, setColorStyles] = useState<ButtonColorType>();

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