import { Pressable, Text, View } from "react-native";
import { ILangComponent } from "./types";
import { styles } from "./styles";
import { CircleCross, Translate } from "../../../../components/Icon";

export default function LangComponent({ text, onPress }: ILangComponent) {
    return (
        <View style={styles.langComponent}>
            <View style={styles.langComponentValue}>
                <Translate color="#fff" />
                <Text style={styles.langComponentText}>{text}</Text>
            </View>
            <Pressable onPress={onPress}>
                <CircleCross color="#fff" />
            </Pressable>
        </View>
    )
}