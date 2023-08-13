import { Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IButtonLink {
    title: string
}

export default function ButtonLink ({title} : IButtonLink) {
    return(
        <TouchableOpacity style={styles.componentButtonLink}>
            <Text style={styles.componentButtonLinkText}>{title}</Text>
        </TouchableOpacity>
    )
}