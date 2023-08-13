import { Text, TouchableWithoutFeedback, TouchableOpacity, GestureResponderEvent } from "react-native";
import { styles } from "./styles";

interface IButtonLink {
    title: string,
    onPress?: ((event: GestureResponderEvent) => void),
}

export default function ButtonLink({ title, onPress }: IButtonLink) {
    return (
        <TouchableOpacity style={styles.componentButtonLink}
            onPress={onPress}>
            <Text style={styles.componentButtonLinkText}>{title}</Text>
        </TouchableOpacity>
    )
}