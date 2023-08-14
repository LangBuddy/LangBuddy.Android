import React from "react";
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { IconType } from "../Icon/types";

interface IInput {
    options?: TextInputProps,
    icon?: ({ isFocused }: IconType) => JSX.Element;
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
            {props.icon && props.icon({ isFocused })}
            <TextInput {...props.options}
                style={[styles.componentInputValue, isFocused && styles.componentInputValueFocused]}
                onChange={onChange}
            />
        </View>
    )
}