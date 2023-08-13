import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

interface IInput extends TextInputProps {
    icon?: JSX.Element;
}

export default function Input(props : IInput) {
    return (
        <View style={styles.componentInput}>
            {props.icon}
            <TextInput {...props} style={styles.componentInputValue} />
        </View>
    )
}