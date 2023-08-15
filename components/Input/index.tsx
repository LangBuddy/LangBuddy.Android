import React from "react";
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { IconType } from "../Icon/types";
import { getColorBuIsFocused } from "../../utils/commons/Input";

interface IInput {
    options?: TextInputProps,
    icon?: ({ color }: IconType) => JSX.Element;
}
export default function Input(props: IInput) {
    const [isFocused, setIsFocused] = React.useState(false);

    const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const { text } = e.nativeEvent;

        if (text.length > 0) {
            setIsFocused(true);
        }
        else {
            setIsFocused(false);
        }
    }

    return (
        <View style={styles.componentInput}>
            {props.icon && props.icon({ color: getColorBuIsFocused(isFocused) })}
            <TextInput {...props.options}
                style={[styles.componentInputValue, isFocused && styles.componentInputValueFocused]}
                onChange={onChange}
            />
        </View>
    )
}